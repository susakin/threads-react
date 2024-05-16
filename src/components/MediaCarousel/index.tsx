import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  getMediaAspectRatio,
  getMediaHeight,
  getMediaWidth,
} from '@utils/mediaAspectRatioUtils';
import cs from 'classnames';
import { Arrow } from '@components/Icon';
import {
  CircleButton,
  AnimatedScrollArea,
  Image,
  VideoPlayer,
  MediaViewer,
} from '..';
import { useDebounceFn } from 'ahooks';
import { getNextCardPosition } from '@utils/animatedCarouselUtils';
import { isSupportTouch } from '@utils/index';
import styles from './index.module.less';
import { Media } from '@typings/index';
import useViewport from '@hooks/useViewport';
import PairMedia from './PairMedia';
import { ImageMediaProps } from '@components/Media/ImageMedia';
import DeleteButton from '@components/Media/DeleteButton';
import AccessibilityButton from '@components/Media/AccessibilityButton';

type MediaCarouselProps = {
  medias: Media[];
  className?: string;
  actionButtonInContainer?: boolean;
  disableViewer?: boolean;
  hasPlaceholder?: boolean;
} & Pick<
  ImageMediaProps,
  'hasAccessibilityButton' | 'onAccessibilityClick' | 'onDelete' | 'hasDelete'
>;

const classNamePrefix = 'media-carousel';

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  medias,
  className,
  actionButtonInContainer = false,
  hasPlaceholder,
  disableViewer = false,
  hasDelete,
  onDelete,
  hasAccessibilityButton,
  onAccessibilityClick,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [defaultIndex, setDefaultIndex] = useState<number>(0);
  const [viewerVisible, setViewerVisible] = useState<boolean>(false);
  const { viewportWidth } = useViewport();

  const aspectRatios = useMemo(() => {
    const ratios: number[] = medias?.map(({ mediaHeight, mediaWidth }) => {
      return getMediaAspectRatio({ mediaHeight, mediaWidth });
    });
    const height = getMediaHeight(ratios[0], ratios[1]);

    return medias?.map((media, index) => {
      const aspectRatio = ratios[index];
      return {
        aspectRatio,
        height,
        width: getMediaWidth(height, aspectRatio),
      };
    });
  }, [medias]);

  const getMedia = (media: Media) => {
    switch (media.type) {
      case 'image':
        return (
          <picture className={styles[`${classNamePrefix}-item-picture`]}>
            <Image
              src={media.url}
              draggable={false}
              alt={media.accessibilityCaption}
            />
          </picture>
        );
      case 'video':
        return (
          <VideoPlayer
            url={media.url}
            playWhenInView={hasDelete}
            disabledSchedule={hasDelete}
          />
        );
    }
  };

  const maxScrollLeft =
    scrollRef.current === null
      ? 0
      : scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

  const disabledScroll = isSupportTouch || maxScrollLeft === 0;

  useEffect(() => {
    setScrollLeft(v => v - 0.0001);
  }, [medias]);

  const scrollTo = (dir: 'prev' | 'next') => {
    const left = getNextCardPosition(
      Math.ceil(scrollRef.current?.scrollLeft as number),
      aspectRatios.map(item => item.width),
      dir,
    );
    scrollRef.current?.scrollTo({
      left,
      behavior: 'smooth',
    });
  };

  const { run } = useDebounceFn(
    () => {
      setScrollLeft(scrollRef.current?.scrollLeft as number);
    },
    {
      wait: 200,
      leading: true,
    },
  );

  const isPairMedia = medias?.length == 2;
  const _meidas = medias?.map((media, index) => {
    return (
      <div
        className={cs(styles[`${classNamePrefix}-inner-item`], {
          [styles[`${classNamePrefix}-inner-item-disabled-viewer`]]:
            disableViewer,
        })}
        style={isPairMedia ? { marginRight: 0 } : aspectRatios[index]}
        onClick={e => {
          e.stopPropagation();
          if (disableViewer) return;
          setViewerVisible(true);
          setDefaultIndex(index);
        }}
        key={index}
      >
        {getMedia(media)}
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
    );
  });

  return (
    <div
      className={cs(styles[classNamePrefix], className, {
        [styles[`${classNamePrefix}-action-button-in-container`]]:
          actionButtonInContainer,
        [styles[`${classNamePrefix}-has-placeholder`]]:
          !actionButtonInContainer && hasPlaceholder,
      })}
    >
      <div className={styles[`${classNamePrefix}-inner`]}>
        <AnimatedScrollArea
          containerRef={scrollRef}
          onScroll={run}
          disabledInit={isSupportTouch}
          disabledScroll={maxScrollLeft === 0}
        >
          {!actionButtonInContainer && hasPlaceholder && (
            <div
              onClick={e => {
                e.stopPropagation();
              }}
              className={styles[`${classNamePrefix}-inner-placehoder`]}
            />
          )}
          {isPairMedia ? (
            <PairMedia
              firstRatio={aspectRatios[0]?.aspectRatio}
              secondRatio={aspectRatios[1]?.aspectRatio}
            >
              {_meidas}
            </PairMedia>
          ) : (
            _meidas
          )}
        </AnimatedScrollArea>
      </div>
      {!disabledScroll && viewportWidth > 767 && (
        <>
          <div
            className={styles[`${classNamePrefix}-prev`]}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <CircleButton
              className={styles[`${classNamePrefix}-prev-button`]}
              disabled={scrollLeft <= 0}
              size={actionButtonInContainer ? 28 : 44}
              onClick={() => {
                scrollTo('prev');
              }}
            >
              <Arrow size={16} viewBox="0 0 24 24" />
            </CircleButton>
          </div>
          <div
            className={styles[`${classNamePrefix}-next`]}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <CircleButton
              size={actionButtonInContainer ? 28 : 44}
              className={styles[`${classNamePrefix}-next-button`]}
              disabled={Math.ceil(scrollLeft) === maxScrollLeft}
              onClick={() => {
                scrollTo('next');
              }}
            >
              <Arrow
                size={16}
                viewBox="0 0 24 24"
                style={{ transform: 'rotate(180deg)' }}
              />
            </CircleButton>
          </div>
        </>
      )}
      {!disableViewer && viewerVisible && (
        <MediaViewer
          medias={medias}
          defaultIndex={defaultIndex}
          visible={viewerVisible}
          onClose={() => {
            setViewerVisible(false);
            setDefaultIndex(0);
          }}
        />
      )}
    </div>
  );
};

export default MediaCarousel;
