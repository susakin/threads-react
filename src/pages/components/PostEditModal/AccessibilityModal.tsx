import React, { useEffect, useState } from 'react';
import styles from './accessibilityModal.module.less';
import Modal from '@components/Modal/Modal';
import useViewport from '@hooks/useViewport';
import { ScrollInModal, Button } from '@components/index';
import { Media } from '@typings/index';
import Accessibility from './Accessibility';

const classNamePrefix = 'accessibility-modal';

type AccessibilityModalProps = {
  visible?: boolean;
  onClose?: () => void;
  media?: Media;
  onUpdateAccessibilityCaption?: (accessibilityCaption: string) => void;
};

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  visible,
  onClose,
  onUpdateAccessibilityCaption,
  media,
}) => {
  const { viewportWidth } = useViewport();
  const [inSmallScreen, setInSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    setInSmallScreen(viewportWidth <= 699);
  }, [viewportWidth]);
  //const inSmallScreen = viewportWidth <= 699;

  const content = (
    <Accessibility
      media={media}
      onOk={accessibilityCaption => {
        onClose?.();
        onUpdateAccessibilityCaption?.(accessibilityCaption);
      }}
    />
  );

  if (inSmallScreen) {
    return (
      <ScrollInModal
        title={'添加替代文字'}
        okText={null}
        visible={visible}
        onCancel={onClose}
      >
        {content}
      </ScrollInModal>
    );
  }

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      animationType="scale-out"
      hasContentStyle={false}
    >
      <div>
        <div className={styles[`${classNamePrefix}-title`]}>
          <Button
            className={styles[`${classNamePrefix}-title-button`]}
            type="text"
            onClick={onClose}
          >
            取消
          </Button>
          <div className={styles[`${classNamePrefix}-title-text`]}>
            添加替代文字
          </div>
        </div>
        <div className={styles[`${classNamePrefix}`]}>{content}</div>
      </div>
    </Modal>
  );
};

export default AccessibilityModal;
