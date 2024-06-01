import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import cs from 'classnames';
import styles from './controls.module.less';
import { isSupportTouch } from '@utils/index';

type ControlsProps = {
  duration: number;
  currentTime: number;
  ready?: boolean;
  onSeekTo?: (currentTime: number) => void;
  onPause?: () => void;
  nearBottom?: boolean;
};

const classNamePrefix = 'controls';

const Controls: React.FC<ControlsProps> = ({
  duration,
  ready,
  currentTime,
  onSeekTo,
  nearBottom,
  onPause,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const linearRef = useRef<boolean>(true);
  const preScaleXRef = useRef<number>(0);
  const isDownRef = useRef<boolean>(false);
  const [scaleX, setScaleX] = useState<number>(currentTime / duration);

  useLayoutEffect(() => {
    const x = +(currentTime / duration).toFixed(4);
    setScaleX(x);
  }, [currentTime, duration]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isDownRef.current = true;
    e.stopPropagation();
    e.preventDefault();
    calculatePercentage(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    isDownRef.current = true;
    const touch = e.touches[0];
    calculatePercentage(touch.clientX);
  };

  useLayoutEffect(() => {
    preScaleXRef.current = scaleX;
  }, [scaleX]);

  const calculatePercentage = (clientX: number) => {
    if (containerRef.current) {
      onPause?.();
      linearRef.current = false;
      const divRight = containerRef.current.getBoundingClientRect().right;
      const distance = divRight - clientX;
      const divWidth = containerRef.current.offsetWidth;
      let calculatedPercentage = +((divWidth - distance) / divWidth)?.toFixed(
        4,
      );
      calculatedPercentage = Math.min(1, Math.max(calculatedPercentage, 0));

      setScaleX(calculatedPercentage);
    }
  };

  useEffect(() => {
    const handleMouseMove = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
      if (isDownRef.current) {
        e.stopPropagation();
        e.preventDefault();
        calculatePercentage(e.clientX);
      }
    };

    const handleUp = (e: React.TouchEvent<HTMLDivElement>) => {
      if (isDownRef.current) {
        e.stopPropagation();
        e.preventDefault();
        isDownRef.current = false;
        linearRef.current = true;
        const time = +(preScaleXRef.current * duration).toFixed(4);
        onSeekTo?.(time);
      }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.touches[0];
      if (isDownRef.current) {
        e.stopPropagation();
        e.preventDefault();
        calculatePercentage(touch.clientX);
      }
    };

    if (ready) {
      if (isSupportTouch) {
        document.addEventListener('touchmove', handleTouchMove as any);
        document.addEventListener('touchend', handleUp as any);
      } else {
        document.addEventListener('mousemove', handleMouseMove as any);
        document.addEventListener('mouseup', handleUp as any);
      }
    }

    return () => {
      if (isSupportTouch) {
        document.removeEventListener('touchmove', handleTouchMove as any);
        document.removeEventListener('touchend', handleUp as any);
      } else {
        document.removeEventListener('mousemove', handleMouseMove as any);
        document.removeEventListener('mouseup', handleUp as any);
      }
    };
  }, [ready]);

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-near-bottom`]]: nearBottom,
      })}
      ref={containerRef}
      onMouseDown={ready ? handleMouseDown : undefined}
      onTouchStart={ready ? handleTouchStart : undefined}
    >
      <div className={styles[`${classNamePrefix}-inner`]}>
        <div
          className={cs(styles[`${classNamePrefix}-inner-progress`], {
            [styles[`${classNamePrefix}-inner-progress-duration`]]:
              linearRef.current && scaleX > preScaleXRef.current,
          })}
          style={{ transform: `scaleX(${100 * scaleX}%)` }}
        />
      </div>
    </div>
  );
};

export default Controls;
