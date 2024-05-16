import React from 'react';
import styles from './circleButton.module.less';
import cs from 'classnames';

const classPrefix = 'circle-button';

export type CircleButtonProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | unknown;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  title?: string;
  size?: number;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  className,
  style,
  onClick,
  disabled,
  children,
  size = 44,
  title,
}) => {
  return (
    <div
      className={cs(styles[`${classPrefix}`], className, {
        [styles[`${classPrefix}-disabled`]]: disabled,
      })}
      style={{ ...style, width: size, height: size }}
      onClick={disabled ? undefined : onClick}
      title={title}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default CircleButton;
