import React from 'react';
import { ImageViewer, Image } from '../../../components';
import { getAspectRatioInSingleMedia } from '@utils/mediaAspectRatioUtils';
import cs from 'classnames';
import styles from './imageMedia.module.less';
import { Media } from '@typings/index';
import DeleteButton from './DeleteButton';
import AccessibilityButton from './AccessibilityButton';

export type ImageMediaProps = {
  media: Media;
  className?: string;
  hasDelete?: boolean;
  disableViewer?: boolean;
  onDelete?: (media: Media) => void;
  hasAccessibilityButton?: boolean;
  onAccessibilityClick?: (media: Media) => void;
};

const classNamePrefix = 'image-media';

const ImageMedia: React.FC<ImageMediaProps> = ({
  media,
  className,
  disableViewer,
  hasDelete,
  onDelete,
  hasAccessibilityButton,
  onAccessibilityClick,
}) => {
  const [visible, setVisible] = React.useState(false);

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
        <picture className={styles[`${classNamePrefix}-picture`]}>
          <Image
            src={media.url}
            draggable={false}
            alt={media.accessibilityCaption}
          />
        </picture>
        {hasDelete && (
          <DeleteButton
            onClick={() => {
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
        <ImageViewer
          media={media}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
    </>
  );
};

export default ImageMedia;
