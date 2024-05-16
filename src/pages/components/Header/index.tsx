import React, { useContext } from 'react';
import Navigation from '../Navigation';
import { Threads } from '@components/Icon';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';
import NavigationBack from './NavigationBack';
import styles from './index.module.less';
import { AuthContext } from '@context/AuthProvider';
import { useHistoryStack } from '@hooks/useHistoryStack';

const classNamePrefix = 'header';

const Header: React.FC = () => {
  const { pathname, search } = useLocation();
  const { state } = useContext(AuthContext);
  const { user } = state;
  const { username } = user || {};
  const profilePath = `/@${username}`;
  const historyStack = useHistoryStack();

  const hidden =
    (['/', '/search', '/following'].includes(pathname) ||
      pathname.startsWith(profilePath) ||
      pathname.startsWith('/settings') ||
      pathname.startsWith('/activity') ||
      historyStack.length === 0) &&
    !search;

  return (
    <header className={styles[`${classNamePrefix}`]} data-id="mask-layer">
      <Link to="/" className={styles[`${classNamePrefix}-logo`]}>
        <Threads
          fill="var(--barcelona-primary-icon)"
          size={'100%'}
          viewBox="0 0 192 192"
        />
      </Link>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <Navigation
          inBack={!hidden}
          className={styles[`${classNamePrefix}-inner-navigation`]}
        />
        <NavigationBack hidden={hidden} />
      </div>
      <Menu />
    </header>
  );
};

export default Header;
