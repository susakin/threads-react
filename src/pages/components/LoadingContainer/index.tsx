import React from 'react';
import { Spin } from '@components/index';
import cs from 'classnames';
import styles from './index.module.less';

export type LoadingContainerProps = {
  children?: React.ReactNode;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const classNamePrefix = 'loading-container';

const LoadingContainer: React.FC<LoadingContainerProps> = ({
  children,
  loading,
  className,
  style,
}) => {
  return (
    <div
      className={cs(
        styles[`${classNamePrefix}`],
        {
          [styles[`${classNamePrefix}-active`]]: loading,
        },
        className,
      )}
      style={style}
    >
      <Spin
        spinning={true}
        className={cs(styles[`${classNamePrefix}-spin`], {
          [styles[`${classNamePrefix}-spin-inactive`]]: !loading,
        })}
      />
      {children}
    </div>
  );
};

export default LoadingContainer;
