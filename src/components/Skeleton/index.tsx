import React from 'react';
import styles from './index.module.less';

const classNamePrefix = 'skeleton';

type SkeletonProps = {
  skeletonLength?: number;
};

const Skeleton: React.FC<SkeletonProps> = ({ skeletonLength = 15 }) => {
  return (
    <div className={styles[`${classNamePrefix}`]}>
      {new Array(skeletonLength).fill(null).map((item, index) => {
        const animationDelay = `calc(${index}* var(--glimmer-stagger-time, 200ms))`;
        return (
          <div className={styles[`${classNamePrefix}-item`]} key={index}>
            <div
              className={styles[`${classNamePrefix}-item-avatar`]}
              style={{ animationDelay }}
            />
            <div className={styles[`${classNamePrefix}-item-inner`]}>
              <div
                className={styles[`${classNamePrefix}-item-inner-paragraph`]}
                style={{ animationDelay }}
              />
              <div
                className={styles[`${classNamePrefix}-item-inner-paragraph`]}
                style={{ animationDelay }}
              />
              <div
                className={styles[`${classNamePrefix}-item-inner-paragraph`]}
                style={{ animationDelay }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skeleton;
