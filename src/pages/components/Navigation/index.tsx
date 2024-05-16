import React, { useContext, useMemo, useState } from 'react';
import {
  Search,
  Create,
  Notifications,
  Profile,
  Home,
  HomeFilled,
} from '@components/Icon';
import { ActiveScaleButton } from '@components/index';
import { Link, useLocation } from 'react-router-dom';
import cs from 'classnames';
import styles from './index.module.less';
import { useCurrentUser } from '@context/AuthProvider';
import { NavigationContext } from '@context/NavigationProvider';
import { useFetch } from '@hooks/useFetch';
import { getUnread } from '@services/activity';
import PostEditModal from '../PostEditModal';

type NavigationProps = {
  className?: string;
  inBack?: boolean;
  style?: React.CSSProperties;
};

const classNamePrefix = 'navigation';

const Navigation: React.FC<NavigationProps> = ({
  className,
  inBack,
  style,
}) => {
  const { pathname, search } = useLocation();

  const user = useCurrentUser();
  const { state, dispatch } = useContext(NavigationContext);
  const { navigationEmitter, unreadNotificationNum } = state;
  const profilePath = `/@${user?.username}`;
  const isFollowing = pathname === '/following';
  const isHome = pathname === '/' || isFollowing;
  const isSearch = ['/search', '/search/'].includes(pathname);
  const isActivity = pathname?.startsWith('/activity');
  const isProfilePost = pathname === profilePath;
  const [visible, setVisible] = useState<boolean>(false);
  const [mainPath, setMainPath] = useState<string>('/');
  const [activityPath, setActivityPath] = useState<string>('/activity');

  const isProfile = [
    '/@',
    profilePath,
    `${profilePath}/replies`,
    `${profilePath}/reposts`,
  ].includes(pathname);

  useFetch(getUnread<number, any>, {
    ignoreErrorMsg: true,
    onSuccess(unreadNotificationNum) {
      dispatch({
        type: 'SET_UNREAD_NOTIFICATION_NUM',
        payload: {
          unreadNotificationNum,
        },
      });
    },
  });

  navigationEmitter?.useSubscription(props => {
    if (props?.type === 'main') {
      props?.path && setMainPath(props?.path);
    }
    if (props?.type === 'activity') {
      setActivityPath(`/activity${props?.path || ''}`);
    }
  });

  const navs = useMemo(() => {
    const iconProps = { size: 26, viewBox: '0 0 26 26' };
    const className = styles[`${classNamePrefix}-item-icon`];
    const HomeIcon = isFollowing ? HomeFilled : Home;

    return [
      {
        path: mainPath,
        key: 'main',
        icon: (
          <HomeIcon
            {...iconProps}
            pathFill={isHome ? 'currentColor' : 'transparent'}
            className={cs(className, {
              [styles[`${classNamePrefix}-item-active`]]: isHome,
            })}
          />
        ),
      },
      {
        path: '/search',
        icon: (
          <Search
            {...iconProps}
            className={cs(className, {
              [styles[`${classNamePrefix}-item-active`]]: isSearch,
            })}
            fill={isHome ? 'currentColor' : 'transparent'}
          />
        ),
        key: 'search',
      },
      {
        icon: (
          <Create {...iconProps} fill="transparent" className={className} />
        ),
        key: 'create',
      },
      {
        path: activityPath,
        icon: (
          <Notifications
            {...iconProps}
            className={cs(className, {
              [styles[`${classNamePrefix}-item-active`]]: isActivity,
            })}
            fill={isActivity ? 'currentColor' : 'transparent'}
          />
        ),
        key: 'activity',
        unread: unreadNotificationNum > 0,
      },
      {
        path: `/@${user?.username ?? ''}`,
        icon: (
          <Profile
            {...iconProps}
            className={cs(className, {
              [styles[`${classNamePrefix}-item-active`]]: isProfile,
            })}
            fill={isProfile ? 'currentColor' : 'transparent'}
          />
        ),
        key: 'profile',
      },
    ];
  }, [
    pathname,
    user,
    unreadNotificationNum,
    isFollowing,
    mainPath,
    activityPath,
  ]);

  function onNavigateClick(key: string) {
    const isSearch = pathname === '/search';
    console.log(pathname.replace('/activity', '') as any, 11);
    switch (key) {
      case 'activity':
        isActivity &&
          navigationEmitter?.emit({
            type: 'activity',
            path: pathname.replace('/activity', '') as any,
          });
        break;
      case 'create':
        setVisible(true);
        break;
      case 'main':
        isHome && navigationEmitter?.emit({ type: 'main' });
        break;
      case 'profile':
        isProfilePost && navigationEmitter?.emit({ type: 'profile' });
        break;
      case 'search':
        isSearch && !search && navigationEmitter?.emit({ type: 'search' });
        break;
    }
  }

  return (
    <>
      <nav
        className={cs(styles['navigation'], className, {
          [styles[`${classNamePrefix}-in-back`]]: inBack,
        })}
        style={style}
        data-id="mask-layer"
      >
        {navs.map(({ path, icon, key, unread }, index) => {
          const Ele = path ? Link : ('div' as any);
          const accessibilityProps = path
            ? { role: 'link', tabIndex: 0 }
            : null;
          return (
            <div className={styles[`${classNamePrefix}-item`]} key={index}>
              <Ele
                to={path}
                className={styles[`${classNamePrefix}-item-link`]}
                {...accessibilityProps}
              >
                <ActiveScaleButton
                  scaleType="square"
                  accessibility={!path}
                  className={styles[`${classNamePrefix}-item-button`]}
                  onClick={() => {
                    onNavigateClick(key as any);
                  }}
                >
                  {icon}
                </ActiveScaleButton>
              </Ele>
              {unread && (
                <div className={styles[`${classNamePrefix}-item-dot`]} />
              )}
            </div>
          );
        })}
      </nav>
      <PostEditModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onSuccess={() => {
          navigationEmitter?.emit({ type: 'newPost' });
        }}
        title={'发布串文'}
      />
    </>
  );
};

export default Navigation;
