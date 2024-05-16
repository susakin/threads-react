import React, { useRef, useState } from 'react';
import { VideoPlayer, VideoViewer } from '..';
import { getAspectRatioInSingleMedia } from '@utils/mediaAspectRatioUtils';
import styles from './videoMedia.module.less';
import { Media } from '@typings/index';
import cs from 'classnames';
import DeleteButton from './DeleteButton';
import AccessibilityButton from './AccessibilityButton';
import { ImageMediaProps } from './ImageMedia';

type VideoMediaProps = {
  media: Media;
  disableViewer?: boolean;
  className?: string;
} & Pick<
  ImageMediaProps,
  'hasDelete' | 'onDelete' | 'hasAccessibilityButton' | 'onAccessibilityClick'
>;

const classNamePrefix = 'video-media';

const VideoMedia: React.FC<VideoMediaProps> = ({
  media,
  hasDelete,
  onDelete,
  disableViewer = false,
  className,
  hasAccessibilityButton,
  onAccessibilityClick,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const style = getAspectRatioInSingleMedia({
    mediaWidth: media.mediaWidth,
    mediaHeight: media.mediaHeight,
  });

  return (
    <>
      <div
        className={cs(styles[`${classNamePrefix}`], className, {
          [styles[`${classNamePrefix}-disabled-viewer`]]: disableViewer,
        })}
        style={style}
        onClick={e => {
          e.stopPropagation();
          !disableViewer && setVisible(true);
        }}
      >
        <VideoPlayer
          url={media.url}
          containerRef={videoContainerRef}
          inViewer={visible}
          disabledSchedule={hasDelete}
          playWhenInView={hasDelete ? true : visible}
        />
        {hasDelete && (
          <DeleteButton
            onClick={e => {
              e.stopPropagation();
              onDelete?.(media);
            }}
          />
        )}
        {hasAccessibilityButton && (
          <AccessibilityButton
            onClick={() => {
              onAccessibilityClick?.(media);
            }}
          />
        )}
      </div>
      {!disableViewer && (
        <VideoViewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mediaHeight={media.mediaHeight}
          mediaWidth={media.mediaWidth}
          videoContainerRef={videoContainerRef}
        />
      )}
    </>
  );
};

export default VideoMedia;
