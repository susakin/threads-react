import React from 'react';
import cs from 'classnames';
import styles from './volume.module.less';
import { MuteOff, Volume as VolumeIcon } from '@components/Icon';

type VolumeProps = {
  muted?: boolean;
  onClick?: () => void;
  inViewer?: boolean;
  nearBottom?: boolean;
};

const Volume: React.FC<VolumeProps> = ({
  inViewer,
  muted,
  onClick,
  nearBottom,
}) => {
  return (
    <div
      className={cs(styles[`volume`], {
        [styles[`volume-in-viewer`]]: inViewer,
        [styles[`volume-near-bottom`]]: inViewer && nearBottom,
      })}
      onClick={e => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <div className={styles[`volume-button`]}>
        {muted ? (
          <MuteOff
            className={styles[`volume-icon`]}
            size={inViewer ? 16 : 12}
            viewBox="0 0 48 48"
          />
        ) : (
          <VolumeIcon
            className={styles[`volume-icon`]}
            size={inViewer ? 16 : 12}
            viewBox="0 0 24 24"
          />
        )}
      </div>
    </div>
  );
};

export default Volume;
