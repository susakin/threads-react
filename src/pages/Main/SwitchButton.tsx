import React, { useContext } from 'react';
import styles from './switchButton.module.less';
import { Link, useLocation } from 'react-router-dom';
import { Switch } from '@components/Icon';
import { NavigationContext } from '@context/NavigationProvider';

const classNamePrefix = 'switch-button';

const SwitchButton: React.FC = () => {
  const { pathname } = useLocation();
  const isFollowing = pathname?.includes('following');
  const { state } = useContext(NavigationContext);
  const { navigationEmitter } = state;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <Link
        to={isFollowing ? '/' : 'following'}
        replace
        className={styles[`${classNamePrefix}-link`]}
        onClick={() => {
          navigationEmitter?.emit({
            type: 'main',
            path: isFollowing ? '/' : '/following',
          });
        }}
      >
        <div className={styles[`${classNamePrefix}-link-text`]}>
          {isFollowing ? '已关注' : '为你推荐'}
        </div>
        <div className={styles[`${classNamePrefix}-link-icon`]}>
          <Switch viewBox="0 0 12 16" width={12} height={16} />
        </div>
      </Link>
    </div>
  );
};

export default SwitchButton;
