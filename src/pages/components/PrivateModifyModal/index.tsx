import React from 'react';
import styles from './index.module.less';
import Modal from '@components/Modal/Modal';
import PrivateModify from './PrivateModify';
import Popup from '@components/Popup';
import useViewport from '@hooks/useViewport';

const classNamePrefix = 'private-modify-modal';

type PrivateModifyModalProps = {
  visible?: boolean;
  onClose?: () => void;
};

const PrivateModifyModal: React.FC<PrivateModifyModalProps> = ({
  visible,
  onClose,
}) => {
  const { viewportWidth } = useViewport();

  const Container = viewportWidth < 700 ? Popup : Modal;

  return (
    <Container
      visible={visible}
      onClose={onClose}
      className={styles[`${classNamePrefix}`]}
    >
      <PrivateModify onModified={onClose} />
    </Container>
  );
};

export default PrivateModifyModal;
