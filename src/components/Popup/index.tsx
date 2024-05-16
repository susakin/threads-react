import React from 'react';
import { Mask } from '../index';
import styles from './index.module.less';

type PopupProps = {
  visible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
};

const classNamePrefix = 'popup';

const Popup: React.FC<PopupProps> = ({
  visible,
  onClose,
  children,
  loading,
}) => {
  return (
    <Mask
      visible={visible}
      onClose={onClose}
      renderToBody
      hasClose={false}
      color="rgba(0,0,0,.7)"
      loading={loading}
    >
      <div className={styles[`${classNamePrefix}`]}>{children}</div>
    </Mask>
  );
};

export default Popup;
