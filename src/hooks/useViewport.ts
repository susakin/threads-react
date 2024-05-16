import { useState, useEffect } from 'react';

const useScrollWidth = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollWidth = () => {
      const scrollDiv = document.createElement('div');
      scrollDiv.style.width = '100px';
      scrollDiv.style.height = '100px';
      scrollDiv.style.overflow = 'scroll';
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      document.body.appendChild(scrollDiv);
      const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      setScrollWidth(width);
    };

    const hasScrollbar =
      document.documentElement.scrollHeight > window.innerHeight;
    if (hasScrollbar) {
      window.addEventListener('resize', updateScrollWidth);
      updateScrollWidth();
    }

    return () => {
      if (hasScrollbar) {
        window.removeEventListener('resize', updateScrollWidth);
      }
    };
  }, []);

  return scrollWidth;
};

export type ViewportDimensions = {
  viewportWidth: number;
  viewportHeight: number;
};

function useViewport() {
  const scrollWidth = useScrollWidth();
  const [viewportDimensions, setViewportDimensions] =
    useState<ViewportDimensions>({
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth - scrollWidth,
    });

  useEffect(() => {
    const setViewport = () => {
      setViewportDimensions({
        viewportHeight: window.innerHeight,
        viewportWidth: window.innerWidth - scrollWidth,
      });
    };

    window.addEventListener('resize', setViewport);
    setViewport();
    return () => {
      window.removeEventListener('resize', setViewport);
    };
  }, [scrollWidth]);

  return viewportDimensions;
}

export default useViewport;
