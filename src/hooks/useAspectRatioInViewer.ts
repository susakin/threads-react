import { getAspectRatioInViewer } from '@utils/mediaAspectRatioUtils';
import { useMemo } from 'react';
import useViewport from './useViewport';
import { MediaDimensions } from '@typings/index';

type useAspectRatioInViewerProps = {
  placeholderWidth?: number;
};

const useAspectRatioInViewer = ({
  mediaWidth,
  mediaHeight,
  placeholderWidth = 0,
}: MediaDimensions & useAspectRatioInViewerProps) => {
  const { viewportWidth, viewportHeight } = useViewport();

  const style = useMemo(() => {
    return getAspectRatioInViewer({
      viewportWidth: viewportWidth - placeholderWidth,
      viewportHeight,
      mediaWidth,
      mediaHeight,
    });
  }, [
    viewportWidth,
    mediaHeight,
    mediaWidth,
    viewportHeight,
    placeholderWidth,
  ]);

  return style;
};

export default useAspectRatioInViewer;
