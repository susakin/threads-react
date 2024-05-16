import React, { useEffect } from 'react';

export const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  props: IntersectionObserverInit,
  onEntryChange: ([entry]: IntersectionObserverEntry[]) => void = () => {},
) => {
  useEffect(() => {
    const node = elementRef?.current; // DOM Ref

    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(onEntryChange, props);

    observer.observe(node as any);

    return () => observer.disconnect();
  }, [elementRef?.current, props, onEntryChange]);
};
