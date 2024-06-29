import React from 'react';
import { VideoPlayer } from '@components/index';
import useAspectRatioInViewer from '@hooks/useAspectRatioInViewer';
import { Media } from '@typings/index';

type VideoInViewerProps = {
  media: Media;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  placeholderWidth?: number;
};

const VideoInViewer: React.FC<VideoInViewerProps> = ({
  media,
  onClick,
  placeholderWidth = 0,
}) => {
  const style = useAspectRatioInViewer({
    mediaWidth: media.mediaWidth,
    mediaHeight: media.mediaHeight,
    placeholderWidth,
  });

  return (
    <div style={style} onClick={onClick}>
      <VideoPlayer
        url={media.url}
        inViewer={true}
        playWhenInView
        disabledSchedule={true}
      />
    </div>
  );
};

export default VideoInViewer;
