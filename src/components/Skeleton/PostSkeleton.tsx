import React from 'react';
import styles from './postSkeleton.module.less';

const classNamePrefix = 'post-skeleton';

type PostSkeletonProps = {
  skeletonLength?: number;
};

const PostSkeleton: React.FC<PostSkeletonProps> = ({ skeletonLength = 15 }) => {
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

export default PostSkeleton;
