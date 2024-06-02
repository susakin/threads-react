import React, { useImperativeHandle, useState, useRef, useEffect } from 'react';
import { Done, Spin } from '@components/Icon';
import cs from 'classnames';
import { Button } from '..';
import styles from './toast.module.less';

type IconType = 'spin' | 'done' | undefined;

export type ToastProps = {
  content?: React.ReactNode;
  icon?: IconType;
  action?: React.ReactNode;
  onActionClick?: (event: React.MouseEvent<HTMLDivElement>) => void | unknown;
  duration?: number;
  onClose?: () => void;
  hasMinWith?: boolean;
};

export type ToastRef = {
  update?: (props: ToastProps) => void;
  close?: () => void;
};

const Toast = (props: ToastProps, ref: React.Ref<ToastRef> | undefined) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [timeEnd, setTimeEnd] = useState<boolean>(false);
  const [_props, setProps] = useState<ToastProps>();
  const {
    icon,
    content,
    action,
    onActionClick,
    duration = 2500,
    onClose,
    hasMinWith,
  } = {
    ...props,
    ..._props,
  };

  const iconMap = {
    spin: <Spin size={16} viewBox="0 0 100 100" />,
    done: <Done size={16} viewBox="0 0 24 24" fill="currentColor" />,
  };

  const hasIcon = typeof icon !== 'undefined';

  const classNamePrefix = 'toast';

  useImperativeHandle(ref, () => {
    return {
      update(p) {
        setProps(p);
      },
      close() {
        clearTimeout(timerRef.current);
        setTimeEnd(true);
      },
    };
  });

  useEffect(() => {
    clearTimeout(timerRef.current);
    setTimeEnd(false);
    if (!duration) return;
    timerRef.current = setTimeout(() => {
      setTimeEnd(true);
    }, duration);

    return () => {
      clearTimeout(timerRef.current);
      setTimeEnd(false);
    };
  }, [duration]);

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-out`]]: timeEnd,
        [styles[`${classNamePrefix}-min-width`]]: hasMinWith,
      })}
      onAnimationEnd={({ animationName }: React.AnimationEvent) => {
        if (animationName === styles[`${classNamePrefix}-out`]) {
          onClose?.();
        }
      }}
    >
      <div className={styles[`${classNamePrefix}-container`]}>
        {hasIcon && (
          <div className={styles[`${classNamePrefix}-icon`]}>
            {iconMap[icon]}
          </div>
        )}
        <div className={styles[`${classNamePrefix}-inner`]}>{content}</div>
        {typeof action !== 'undefined' && (
          <Button
            type="text"
            className={styles[`${classNamePrefix}-action`]}
            onClick={e => {
              onActionClick?.(e);
              setProps(p => ({ ...p, duration: 1 }));
            }}
          >
            {action}
          </Button>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef<ToastRef, ToastProps>(Toast);
