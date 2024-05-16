import React, { useEffect, useRef, useState } from 'react';
import { Mask, Swiper, CircleButton, SwiperRef } from '../';
import { Arrow } from '@components/Icon';
import VideoInViewer from './VideoInViewer';
import ImageInViewer from './ImageInViewer';
import { isSupportTouch } from '@utils/index';
import styles from './index.module.less';
import { Media } from '@typings/index';
import useViewport from '@hooks/useViewport';

type MediaViewerProps = {
  visible?: boolean;
  onClose?: () => void;
  medias: Media[];
  defaultIndex?: number;
};

const classNamePrefix = 'media-viewer';

const MediaViewer: React.FC<MediaViewerProps> = ({
  visible,
  onClose,
  defaultIndex = 0,
  medias,
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentIndex, setCurrentIndex] = useState(defaultIndex || 0);
  const { viewportWidth } = useViewport();
  const placeholderWidth = viewportWidth >= 768 ? 184 : 0;
  function getMediaItem(media: Media) {
    switch (media.type) {
      case 'image':
        return (
          <ImageInViewer
            media={media}
            placeholderWidth={placeholderWidth}
            onClick={e => {
              e.stopPropagation();
            }}
          />
        );
      case 'video':
        return (
          <VideoInViewer
            media={media}
            placeholderWidth={placeholderWidth}
            onClick={e => {
              e.stopPropagation();
            }}
          />
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    setCurrentIndex(defaultIndex);
  }, [defaultIndex]);

  return (
    <Mask
      visible={visible}
      onClose={onClose}
      pullToClose={true}
      contentClassName={styles[`${classNamePrefix}`]}
      renderToBody={true}
    >
      <div className={styles[`${classNamePrefix}-inner`]} onClick={onClose}>
        <Swiper
          defaultIndex={defaultIndex}
          allowTouchMove={isSupportTouch}
          ref={swiperRef}
          onIndexChange={index => {
            setCurrentIndex(index);
          }}
        >
          {medias.map((media, index) => {
            return (
              <Swiper.Item key={index}>
                <div className={styles[`${classNamePrefix}-inner-item`]}>
                  {getMediaItem(media)}
                </div>
              </Swiper.Item>
            );
          })}
        </Swiper>
      </div>
      <div className={styles[`${classNamePrefix}-prev`]}>
        <CircleButton
          className={styles[`${classNamePrefix}-prev-button`]}
          disabled={currentIndex === 0}
          onClick={() => {
            swiperRef.current?.swipePrev();
          }}
        >
          <Arrow size={16} viewBox="0 0 24 24" />
        </CircleButton>
      </div>
      <div className={styles[`${classNamePrefix}-next`]}>
        <CircleButton
          className={styles[`${classNamePrefix}-next-button`]}
          disabled={currentIndex === medias.length - 1}
          onClick={() => {
            swiperRef.current?.swipeNext();
          }}
        >
          <Arrow
            size={16}
            viewBox="0 0 24 24"
            style={{ transform: 'rotate(180deg)' }}
          />
        </CircleButton>
      </div>
    </Mask>
  );
};

export default MediaViewer;
