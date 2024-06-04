import React from 'react';
import styles from './activityHeader.module.less';
import { Arrow } from '@components/Icon';

const classNamePrefix = 'activity-header';

type ActivityHeaderProps = {
  hasBack?: boolean;
  title?: React.ReactNode;
  onBackClick?: () => void;
};

const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  hasBack,
  onBackClick,
  title,
}) => {
  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-back`]}>
        {hasBack && (
          <Arrow size={20} viewBox="0 0 24 24" onClick={onBackClick} />
        )}
      </div>
      <div className={styles[`${classNamePrefix}-title`]}>{title}</div>
    </div>
  );
};

export default ActivityHeader;
