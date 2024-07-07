import React from 'react';
import styles from './accessibilityPanel.module.less';
import { Button } from '@components/index';
import { Media } from '@typings/index';
import Accessibility from './Accessibility';

const classNamePrefix = 'accessibility-panel';

type AccessibilityPanelProps = {
  media?: Media;
  onUpdateAccessibilityCaption?: (accessibilityCaption: string) => void;
  onClose?: () => void;
};

const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  onUpdateAccessibilityCaption,
  media,
  onClose,
}) => {
  const content = (
    <Accessibility
      media={media}
      onOk={accessibilityCaption => {
        onClose?.();
        onUpdateAccessibilityCaption?.(accessibilityCaption);
      }}
    />
  );

  return (
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
  );
};

export default AccessibilityPanel;
