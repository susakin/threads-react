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

const throttleShow = throttle(
  (props: ToastProps | string, resolve: (value: ToastRef) => void) => {
    const toastRef = createRef<ToastRef>();
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
      return new Promise<void>(resolveSchedule => {
        const unmount = renderToContainer(
          <Toast
            ref={toastRef}
            {...(typeof props === 'string' ? { content: props } : props)}
            onClose={() => {
              unmount();
              toastRef.current && resolve(toastRef.current);
              resolveSchedule();
            }}
          />,
          toastContainer,
        );
        Promise.resolve().then(() => {
          if (typeof props !== 'string') {
            props?.duration === 0 && resolve(toastRef.current as any);
            resolveSchedule();
          }
        });
      });
    });
  },
  2000,
  { leading: true },
);

export function show(props: ToastProps | string): Promise<ToastRef> {
  return new Promise<ToastRef>(resolve => {
    throttleShow(props, resolve);
  });
}
