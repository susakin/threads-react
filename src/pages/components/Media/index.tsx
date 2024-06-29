import React, { useMemo } from 'react';
import { Media as MediaItem } from '@typings/index';
import { ImageMedia, MediaCarousel, VideoMedia } from '../index';
import { ImageMediaProps } from './ImageMedia';

type MediaProps = {
  medias?: MediaItem[];
  disableViewer?: boolean;
  actionButtonInContainer?: boolean;
  hasPlaceholder?: boolean;
} & Pick<
  ImageMediaProps,
  'hasDelete' | 'onDelete' | 'hasAccessibilityButton' | 'onAccessibilityClick'
>;

const Media: React.FC<MediaProps> = ({
  disableViewer,
  actionButtonInContainer,
  hasPlaceholder,
  medias,
  ...rest
}) => {
  const _medias = useMemo(() => {
    if (medias?.length === 1) {
      const meida = medias[0];
      if (meida.type === 'image') {
        return (
          <ImageMedia media={meida} disableViewer={disableViewer} {...rest} />
        );
      } else {
        return (
          <VideoMedia media={meida} {...rest} disableViewer={disableViewer} />
        );
      }
    } else if (medias?.length && medias?.length > 1) {
      return (
        <MediaCarousel
          medias={medias}
          disableViewer={disableViewer}
          actionButtonInContainer={actionButtonInContainer}
          hasPlaceholder={hasPlaceholder}
          {...rest}
        />
      );
    } else {
      return null;
    }
  }, [medias]);

  return <>{_medias}</>;
};

export default Media;
