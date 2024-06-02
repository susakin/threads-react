import React, { useEffect, useRef } from 'react';
import { Mask } from '../index';
import useAspectRotioStyle from '@hooks/useAspectRatioInViewer';
import styles from './index.module.less';
import { MediaDimensions } from '@typings/index';

type VideoViewerProps = {
  videoContainerRef: React.RefObject<HTMLElement>;
  visible?: boolean;
  onClose?: () => void;
  disabledPlayerScheduler?: boolean;
} & MediaDimensions;

const classPrefix = 'video-viewer';

const VideoViewer: React.FC<VideoViewerProps> = ({
  visible,
  onClose,
  videoContainerRef,
  mediaWidth,
  mediaHeight,
  disabledPlayerScheduler,
}) => {
  const videoViewerRef = useRef<HTMLDivElement>(null);

  const style = useAspectRotioStyle({
    mediaWidth,
    mediaHeight,
  });

  useEffect(() => {
    let node: any;
    const maskLayerElements = document.querySelectorAll(
      '[data-id="mask-layer"]',
    );
    if (visible) {
      node = videoContainerRef.current?.removeChild(
        videoContainerRef.current?.firstChild as any,
      );
      videoViewerRef.current?.appendChild(node);
      maskLayerElements.forEach(element => {
        //@ts-ignore
        element.style.zIndex = '0';
      });
    }

    return () => {
      node && videoContainerRef.current?.appendChild(node as any);
      maskLayerElements.forEach(element => {
        //@ts-ignore
        element.style.zIndex = '';
      });
    };
  }, [visible]);

  return (
    <Mask
      visible={visible}
      onClose={onClose}
      pullToClose
      contentClassName={styles[`${classPrefix}`]}
      disabledPlayerScheduler={disabledPlayerScheduler}
    >
      <div className={styles[`${classPrefix}-inner`]} onClick={onClose}>
        <div
          style={style}
          ref={videoViewerRef}
          onClick={e => {
            e.stopPropagation();
          }}
        />
      </div>
    </Mask>
  );
};

export default VideoViewer;
