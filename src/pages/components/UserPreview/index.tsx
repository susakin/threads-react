import React from 'react';
import styles from './index.module.less';
import { Avatar } from '@components/index';
import cs from 'classnames';

type UserPreviewProps = {
  urls?: string[];
  className?: string;
  hasMarginRightWhenOne?: boolean;
};

const classNamePrefix = 'user-preview';

const UserPreview: React.FC<UserPreviewProps> = ({
  urls,
  className,
  hasMarginRightWhenOne,
}) => {
  const isMore = (urls?.length || 0) > 2;
  const moreSizeMap: Record<number, number> = {
    0: 20,
    1: 16,
    2: 12,
  };

  if (!urls?.length) return null;

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], className, {
        [styles[`${classNamePrefix}-normal`]]: !isMore,
        [styles[`${classNamePrefix}-more`]]: isMore,
        [styles[`${classNamePrefix}-offset`]]:
          hasMarginRightWhenOne && urls?.length == 1,
      })}
    >
      {urls?.map((url, index) => {
        return (
          <div className={styles[`${classNamePrefix}-item`]} key={index}>
            <Avatar url={url} size={isMore ? moreSizeMap[index] : 16} />
          </div>
        );
      })}
    </div>
  );
};

export default UserPreview;
