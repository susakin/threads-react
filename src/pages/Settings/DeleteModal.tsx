import React, { useEffect, useState } from 'react';
import styles from './deleteModal.module.less';
import Modal from '@components/Modal/Modal';
import DeleteAccount from './DeleteAccount';
import useViewport from '@hooks/useViewport';
import { ScrollInModal } from '@components/index';
import DeleteConfirm from './DeleteConfirm';
const classNamePrefix = 'delete-modal';

type DeleteModalProps = {
  visible?: boolean;
  onClose?: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ visible, onClose }) => {
  const { viewportWidth } = useViewport();
  const inSmallScreen = viewportWidth <= 699;
  const [nextStep, setNextStep] = useState<boolean>(false);

  useEffect(() => {
    !visible && setNextStep(false);
  }, [visible]);

  const content = nextStep ? (
    <DeleteConfirm
      hiddenTitle={inSmallScreen}
      onBack={() => {
        setNextStep(false);
      }}
    />
  ) : (
    <DeleteAccount
      onConfirm={() => {
        setNextStep(true);
      }}
      hiddenTitle={inSmallScreen}
    />
  );

  if (inSmallScreen) {
    return (
      <ScrollInModal
        visible={visible}
        onCancel={onClose}
        title="删除主页"
        onOk={() => {
          setNextStep(false);
        }}
        okText={nextStep ? '返回' : null}
      >
        {content}
      </ScrollInModal>
    );
  }
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      animationType="scale-in"
      className={styles[`${classNamePrefix}`]}
    >
      {content}
    </Modal>
  );
};

export default DeleteModal;
