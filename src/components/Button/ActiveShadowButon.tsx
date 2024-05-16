import React from 'react';
import cs from 'classnames';
import styles from './activeShadowButton.module.less';

const classPrefix = 'active-shadow-button';

export type ActiveShadowButtonProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | unknown;
  children?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
};

const ActiveShadowButton: React.FC<ActiveShadowButtonProps> = ({
  className,
  onClick,
  children,
  disabled,
  danger,
}) => {
  return (
    <div
      className={cs(styles[`${classPrefix}`], className, {
        [styles[`${classPrefix}-disabled`]]: disabled,
        [styles[`${classPrefix}-danger`]]: danger,
      })}
      onClick={disabled ? undefined : onClick}
      role="button"
      tabIndex={0}
    >
      <div className={cs(styles[`${classPrefix}-shadow`])} />
      <div className={cs(styles[`${classPrefix}-inner`])}>{children}</div>
    </div>
  );
};

export default ActiveShadowButton;
