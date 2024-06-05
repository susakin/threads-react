import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

type HidableComponentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  root?: Element;
  rootMargin?: string;
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

const HidableComponent: React.FC<HidableComponentProps> = ({
  children,
  className,
  style,
  rootMargin = '2000px 0px',
  root,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hide, setHide] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('');

  useIntersectionObserver(
    containerRef,
    {
      root,
      rootMargin,
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
      className={className}
      style={{ ...style, minHeight: height }}
    >
      {hide ? null : children}
    </div>
  );
};

export default HidableComponent;
