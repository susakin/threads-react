import React from 'react';
import { Image } from '@components/index';
import styles from './imageInViewer.module.less';
import useAspectRatioInViewer from '@hooks/useAspectRatioInViewer';
import { Media } from '@typings/index';

type ImageInViewerProps = {
  media: Media;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  placeholderWidth?: number;
};

const classNamePrefix = 'image-in-viewer';

const ImageInViewer: React.FC<ImageInViewerProps> = ({
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
    <div
      className={styles[`${classNamePrefix}`]}
      style={style}
      onClick={onClick}
    >
      <picture className={styles[`${classNamePrefix}-picture`]}>
        <Image src={media.url} draggable={false} />
      </picture>
    </div>
  );
};

export default ImageInViewer;
