import React from 'react';
import styles from './postSkeleton.module.less';

const classNamePrefix = 'post-skeleton';

type PostSkeletonProps = {
  skeletonLength?: number;
  hasBadge?: boolean;
};

const PostSkeleton: React.FC<PostSkeletonProps> = ({
  skeletonLength = 15,
  hasBadge = false,
}) => {
  return (
    <div className={styles[`${classNamePrefix}`]}>
      {new Array(skeletonLength).fill(null).map((i, index) => {
        const animationDelay = `calc(${index}* var(--glimmer-stagger-time, 200ms))`;
        return (
          <div className={styles[`${classNamePrefix}-item`]} key={index}>
            <div
              className={styles[`${classNamePrefix}-item-avatar`]}
              style={{ animationDelay }}
            >
              {hasBadge && (
                <div className={styles[`${classNamePrefix}-item-avatar-badge`]}>
                  <div
                    className={
                      styles[`${classNamePrefix}-item-avatar-badge-dot`]
                    }
                    style={{ animationDelay }}
                  />
                </div>
              )}
            </div>
            <div className={styles[`${classNamePrefix}-item-inner`]}>
              {new Array(3).fill(0).map((i, index) => (
                <div
                  className={styles[`${classNamePrefix}-item-inner-paragraph`]}
                  style={{ animationDelay }}
                  key={index}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostSkeleton;
