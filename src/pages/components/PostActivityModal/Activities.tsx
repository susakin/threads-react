import React from 'react';
import cs from 'classnames';
import styles from './activities.module.less';
import { Direction } from '@components/Icon';

type Activity = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  num?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  hasMore?: boolean;
};

type ActivitiesProps = {
  items?: Activity[];
};

const classNamePrefix = `post-activities`;

const Activities: React.FC<ActivitiesProps> = ({ items }) => {
  return (
    <div className={styles[`${classNamePrefix}`]}>
      {items?.map(({ icon, label, num, onClick, hasMore = true }, index) => {
        return (
          <div
            className={cs(styles[`${classNamePrefix}-item`], {
              [styles[`${classNamePrefix}-item-has-more`]]: hasMore,
            })}
            key={index}
            onClick={onClick}
          >
            <div className={styles[`${classNamePrefix}-item-icon`]}>{icon}</div>
            <div className={styles[`${classNamePrefix}-item-inner`]}>
              <div className={styles[`${classNamePrefix}-item-inner-text`]}>
                {label}
              </div>
              <div className={styles[`${classNamePrefix}-item-inner-num`]}>
                <div
                  className={styles[`${classNamePrefix}-item-inner-num-text`]}
                >
                  {num}
                </div>
                {hasMore && (
                  <div
                    className={styles[`${classNamePrefix}-item-inner-num-icon`]}
                  >
                    <Direction
                      fill="currentColor"
                      size={16}
                      viewBox="0 0 24 24"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
