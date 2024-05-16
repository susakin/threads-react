import React from 'react';
import { Mask } from '../index';
import useAspectRatioInViewer from '@hooks/useAspectRatioInViewer';
import styles from './index.module.less';
import { Media } from '@typings/index';

type ImageViewerProps = {
  visible?: boolean;
  onClose?: () => void;
  media: Media;
};

const classNamePrefix = 'image-viewer';

const ImageViewer: React.FC<ImageViewerProps> = ({
  visible,
  onClose,
  media,
}) => {
  const { mediaWidth, mediaHeight, url } = media;
  const style = useAspectRatioInViewer({
    mediaWidth,
    mediaHeight,
  });

  return (
    <Mask visible={visible} onClose={onClose} renderToBody pullToClose>
      <div className={styles[`${classNamePrefix}`]} onClick={onClose}>
        <div
          className={styles[`${classNamePrefix}-inner`]}
          style={style}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <img src={url} draggable={false} />
        </div>
      </div>
    </Mask>
  );
};

export default ImageViewer;
