import React, { createRef } from 'react';
import Toast, { ToastProps, ToastRef } from './Toast';
import renderToContainer from '@utils/renderToContainer';
import { throttle } from 'lodash';
import './index.less';
import { getTheme } from '@context/ThemeProvider';

interface Scheduler {
  schedule: (callback: () => Promise<void>) => void;
  processQueue: () => void;
}

const createScheduler = (): Scheduler => {
  const showQueue: (() => Promise<void>)[] = [];
  let isProcessing = false;

  const processQueue = async () => {
    if (!isProcessing && showQueue.length > 0) {
      isProcessing = true;
      const nextResolver = showQueue.shift();
      if (nextResolver) {
        await nextResolver();
      }
      isProcessing = false;
      processQueue();
    }
  };

  return {
    schedule: (callback: () => Promise<void>) => {
      showQueue.push(callback);
      processQueue();
    },
    processQueue, // 将 processQueue 作为公共方法暴露出去
  };
};

let toastContainer: HTMLElement;
const scheduler = createScheduler();

const _show = (
  props: ToastProps | string,
  resolve: (value: ToastRef) => void,
) => {
  const theme = getTheme();
  const className = `_TOAST_CONTAINER ${
    theme === 'dark' ? 'light' : 'dark'
  }-mode`;
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = className;
    toastContainer.style.pointerEvents = 'none';
    document.body.appendChild(toastContainer);
  } else {
    toastContainer.className = className;
  }

  scheduler.schedule(() => {
    const toastRef = createRef<ToastRef>();
    return new Promise<void>(resolveSchedule => {
      const unmount = renderToContainer(
        <Toast
          ref={toastRef}
          {...(typeof props === 'string' ? { content: props } : props)}
          onClose={() => {
            unmount();
            resolveSchedule();
          }}
        />,
        toastContainer,
      );
      Promise.resolve().then(() => {
        resolve(toastRef.current as any);
      });
    });
  });
};

const throttleShow = throttle(_show, 2000, { leading: true });

let lastToastRef: ToastRef;

export async function show(props: ToastProps | string): Promise<ToastRef> {
  const lastContent = lastToastRef?.getContent?.();
  const isSameContent =
    lastContent === props ||
    ((props as ToastProps)?.content &&
      lastContent === (props as ToastProps)?.content);

  if (isSameContent) {
    await lastToastRef?.close?.();
  }
  const toastRef = await new Promise<ToastRef>(resolve => {
    isSameContent ? _show(props, resolve) : throttleShow(props, resolve);
  });
  lastToastRef = toastRef;
  return toastRef;
}
