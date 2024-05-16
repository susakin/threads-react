import React from 'react';
import styles from './index.module.less';

type SwipperItemProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const SwipperItem: React.FC<SwipperItemProps> = ({ children, onClick }) => {
  return (
    <div className={styles['swiper-item']} onClick={onClick}>
      {children}
    </div>
  );
};

export default SwipperItem;
