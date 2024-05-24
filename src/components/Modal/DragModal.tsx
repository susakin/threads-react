import React, { useEffect, useRef, useState } from 'react';
import styles from './dragModal.module.less';
import { Mask } from '..';
import useViewport from '@hooks/useViewport';

const classNamePrefix = 'drag-modal';

type DragModalProps = {
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const DragModal: React.FC<DragModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const dragBarRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<number[]>([]);
  const { viewportHeight } = useViewport();
  const [transform, setTransform] = useState<number | string>('100%');
  const [touched, setTouched] = useState<boolean>(false);
  const screenYRef = useRef<number>();
  const transformRef = useRef<number>();
  const dragBarHeight = 28;

  function getStep(offset: number) {
    return stepRef.current.reduce(function (b, c) {
      return Math.abs(c - offset) < Math.abs(b - offset) ? c : b;
    }, Infinity);
  }

  useEffect(() => {
    if (visible) {
      setTransform(
        viewportHeight -
          (contentRef.current?.scrollHeight || 0) -
          dragBarHeight,
      );
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) true;
    const contentHeight = contentRef.current?.scrollHeight || 0;
    const maxContentHeight = viewportHeight - contentHeight - dragBarHeight;
    stepRef.current = ['auto', '0%']
      .map(step => {
        if (step === 'auto') {
          return maxContentHeight;
        } else if (step.slice(-1) === '%') {
          const c = 1 - Number(step.slice(0, -1)) / 100;
          return Math.ceil(c * viewportHeight);
        }
      })
      .map(a => {
        return Math.max(0, Math.min(a as number, viewportHeight));
      });
  }, [viewportHeight, visible]);

  function onTouchStart(e: React.TouchEvent) {
    screenYRef.current = e.touches[0].screenY;
    transformRef.current = transform as number;
    setTouched(true);
  }

  function _onClose() {
    setTransform(viewportHeight);
    setTouched(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }

  function onTouchEnd() {
    const step = getStep(transform as number);
    setTransform(step as number);
    (transform as number) >= viewportHeight
      ? _onClose?.()
      : step >= viewportHeight &&
        setTimeout(() => {
          _onClose?.();
        }, 300);
    setTouched(false);

    screenYRef.current = 0;
    transformRef.current = 0;
  }

  useEffect(() => {
    const touchMove = (e: React.TouchEvent<Element>) => {
      if (!screenYRef.current || !transformRef.current) return;
      const screenY = e.touches[0].screenY;
      const gap = (screenYRef.current as number) - screenY;
      setTransform((transformRef.current as number) - gap);
      e.preventDefault();
    };
    document.addEventListener('touchmove', touchMove as any, {
      passive: !1,
    });
    return () => {
      return document.removeEventListener('touchmove', touchMove as any);
    };
  }, []);

  const _contentHeight =
    typeof transform === 'number'
      ? ((viewportHeight - transform) as number) - dragBarHeight
      : '';

  return (
    <Mask
      visible={visible}
      onClose={_onClose}
      renderToBody={true}
      hasClose={false}
      color="rgba(0,0,0,.7)"
      contentClassName={styles[`${classNamePrefix}-content`]}
    >
      <div
        className={styles[`${classNamePrefix}`]}
        style={{
          transform: `translateY(${
            typeof transform === 'number' ? `${transform}px` : `${transform}`
          })`,
          transition: touched ? '' : 'transform 0.3s ease',
        }}
        role="dialog"
      >
        <div
          className={styles[`${classNamePrefix}-drag`]}
          ref={dragBarRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles[`${classNamePrefix}-drag-bar`]} />
        </div>
        <div
          className={styles[`${classNamePrefix}-inner`]}
          ref={contentRef}
          style={{ height: _contentHeight }}
        >
          {children}
        </div>
      </div>
    </Mask>
  );
};

export default DragModal;
