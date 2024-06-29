import React from 'react';
import styles from './accessibilityButton.module.less';

const classNamePrefix = 'accessibility-button';

type AccessibilityButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({
  onClick,
}) => {
  return (
    <div onClick={onClick} className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-inner`]}>替代文字</div>
    </div>
  );
};

export default AccessibilityButton;
