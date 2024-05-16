import React, { useRef, useState } from 'react';
import cs from 'classnames';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import styles from './index.module.less';

type HideableComponentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function intersectionObserverEntryIsIntersecting(
  entry: IntersectionObserverEntry,
) {
  return entry.isIntersecting != null
    ? entry.isIntersecting
    : entry.intersectionRatio > 0 ||
        (entry.intersectionRect &&
          (entry.intersectionRect.height > 0 ||
            entry.intersectionRect.width > 0));
}

const HideableComponent: React.FC<HideableComponentProps> = ({
  children,
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('');

  useIntersectionObserver(
    containerRef,
    {
      root: null,
      rootMargin: '2000px 0px',
      threshold: 0,
    },
    ([entry]) => {
      const height = containerRef.current?.getBoundingClientRect().height;
      const hide = !intersectionObserverEntryIsIntersecting(entry) && !!height;
      if (hide) {
        setHeight(`${height}px`);
      } else {
        setHeight('');
      }
      Promise.resolve().then(() => {
        setHide(hide);
      });
    },
  );

  return (
    <div
      ref={containerRef}
      className={cs(styles['hideable-component'], className)}
      style={{ ...style, minHeight: height }}
    >
      {hide ? null : children}
    </div>
  );
};

export default HideableComponent;
