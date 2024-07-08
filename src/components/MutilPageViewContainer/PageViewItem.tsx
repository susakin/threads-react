import React from 'react';
import styles from './pageViewItem.module.less';

const classNamePrefix = 'page-view-item';

type StepItemProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const StepItem: React.FC<StepItemProps> = ({ children, style }) => {
  return (
    <div className={styles[`${classNamePrefix}`]} style={style}>
      {children}
    </div>
  );
};

export default StepItem;
