import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import styles from './index.module.less';
import cs from 'classnames';
import { CircleButton, Spin } from '@components/index';
import { Close } from '@components/Icon';
import ReactDOM from 'react-dom';
import { useKeyPress } from 'ahooks';
import { playerScheduler } from '@components/VideoPlayer/scheduler';
import { useLockScroll } from '@hooks/useLockScroll';
import { uniqueId } from 'lodash';

export type MaskProps = {
  visible?: boolean;
  onClose?: () => void;
  color?: 'default' | 'blur' | string;
  children?: React.ReactNode;
  hasClose?: boolean;
  disableBodyScroll?: boolean;
  pullToClose?: boolean;
  contentClassName?: string;
  onClosePlaceholderClick?: () => void;
  renderToBody?: boolean;
  loading?: boolean;
  disabledPlayerScheduler?: boolean;
};

const classNamePrefix = 'mask';
const maskStack: string[] = [];

const Mask: React.FC<MaskProps> = ({
  visible,
  onClose,
  color = 'default',
  children,
  hasClose = true,
  onClosePlaceholderClick,
  disableBodyScroll = true,
  pullToClose = false,
  contentClassName,
  renderToBody = false,
  loading,
  disabledPlayerScheduler = false,
}) => {
  const isBasicColor = ['default', 'blur'].includes(color);
  const innerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<string>(uniqueId());

  useEffect(() => {
    if (visible) {
      maskStack.push(idRef.current);
    }
    return () => {
      maskStack.pop();
    };
  }, [visible]);

  useLayoutEffect(() => {
    const el = maskRef.current;
    if (el === null) return;
    el.scrollTop = window.innerHeight;
  }, [visible, pullToClose]);

  useEffect(() => {
    if (disabledPlayerScheduler) return;
    if (visible) {
      playerScheduler.stop();
    }
    return () => {
      playerScheduler.resume();
    };
  }, [visible]);

  const onScroll = useCallback(() => {
    const maskEl = maskRef.current;
    const innerEl = innerRef.current;
    if (maskEl === null || innerEl === null) return;
    if (maskEl.scrollTop < 5) {
      onClose?.();
    } else {
      const rate = Math.min(maskEl.scrollTop / window.innerHeight, 1);
      maskEl.style.opacity = `${rate}`;
      if (innerEl.children[1]) {
        (innerEl.children[1] as any).style.transform = `scale(${rate})`;
      }
    }
  }, []);

  const colorClassName = {
    [styles[`${classNamePrefix}-${color}`]]: isBasicColor,
  };

  const node = (
    <>
      <div
        className={cs(styles[`${classNamePrefix}`], {
          ['dark-mode']: color === 'default',
          [styles[`${classNamePrefix}-pull-to-close`]]: pullToClose,
        })}
        ref={maskRef}
        onScroll={pullToClose ? onScroll : undefined}
        style={{
          backgroundColor: color,
        }}
        onClick={e => e.stopPropagation()}
      >
        {pullToClose && (
          <div
            className={cs(
              styles[`${classNamePrefix}-pull-placeholder`],
              colorClassName,
            )}
          />
        )}
        <div
          className={cs(styles[`${classNamePrefix}-inner`], colorClassName)}
          ref={innerRef}
        >
          <div
            className={styles[`${classNamePrefix}-inner-placeholder`]}
            onClick={
              onClosePlaceholderClick ? onClosePlaceholderClick : onClose
            }
          />
          <div
            className={cs(
              styles[`${classNamePrefix}-inner-content`],
              contentClassName,
            )}
          >
            {loading ? <Spin spinning size={20} /> : children}
          </div>
        </div>
        {hasClose && (
          <div className={styles[`${classNamePrefix}-close`]} onClick={onClose}>
            <CircleButton
              className={styles[`${classNamePrefix}-close-button`]}
              title="关闭"
            >
              <Close
                size={18}
                viewBox="0 0 24 24"
                color="rgb(119, 119, 119)"
                fill="rgb(119, 119, 119)"
              />
            </CircleButton>
          </div>
        )}
      </div>
    </>
  );
  useLockScroll(
    maskRef,
    (visible as boolean) && disableBodyScroll,
    styles[`${classNamePrefix}-lock`],
  );

  useKeyPress([27], () => {
    if (!visible || idRef.current !== maskStack[maskStack.length - 1]) {
      return;
    }
    onClosePlaceholderClick ? onClosePlaceholderClick() : onClose?.();
  });

  if (renderToBody) {
    return ReactDOM.createPortal(visible ? node : null, document.body);
  }

  return visible ? node : null;
};

export default Mask;
