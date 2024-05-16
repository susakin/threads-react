import React from 'react';
import { Spin as SpinIcon } from '../Icon';
import cs from 'classnames';
import styles from './index.module.less';

type SpinProps = {
  spinning?: boolean;
  size?: number;
  children?: React.ReactNode;
  className?: string;
  height?: number;
};

const classNamePrefix = 'spin';

const Spin: React.FC<SpinProps> = ({
  spinning,
  size = 24,
  children,
  className,
  height,
}) => {
  return (
    <>
      {spinning ? (
        <div
          className={cs(styles[`${classNamePrefix}`], className)}
          style={{ height }}
        >
          <SpinIcon size={size} viewBox="0 0 100 100" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Spin;
