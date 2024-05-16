import React, { useMemo } from 'react';
import useViewport from './useViewport';

export const useHeaderHeightStyle = () => {
  const { viewportWidth } = useViewport();

  const heightStyle = useMemo<React.CSSProperties>(() => {
    return {
      '--header-height':
        viewportWidth < 700
          ? 'var(--barcelona-mobile-header-height)'
          : 'var(--barcelona-desktop-header-height)',
    } as any;
  }, [viewportWidth]);

  return heightStyle;
};
