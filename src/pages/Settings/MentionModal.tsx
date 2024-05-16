import React from 'react';
import styles from './mentionModal.module.less';
import useViewport from '@hooks/useViewport';
import MentionAuth from './MentionAuth';
import { ScrollInModal } from '@components/index';
import Modal from '@components/Modal/Modal';

const classNamePrefix = 'mention-modal';

type MentionModalProps = {
  visible?: boolean;
  onClose?: () => void;
};

const MentionModal: React.FC<MentionModalProps> = ({ visible, onClose }) => {
  const { viewportWidth } = useViewport();
  const inSmallScreen = viewportWidth <= 699;
  const content = <MentionAuth hiddenTitle={inSmallScreen} />;

  if (inSmallScreen) {
    return (
      <ScrollInModal
        visible={visible}
        onCancel={onClose}
        title="提及"
        okText={null}
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

export default MentionModal;
