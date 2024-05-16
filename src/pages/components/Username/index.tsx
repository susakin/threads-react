import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { Link } from 'react-router-dom';
import { VerifiedBadge } from '@components/Icon';
import { Popover } from '@components/index';
import UserCard from '../UserCard';
import cs from 'classnames';
import { User } from '@typings/index';
import { PickFollowButtonProps } from '../UserCard';
import { getUserByUsername } from '@services/profile';
import { useFetch } from '@hooks/useFetch';
import { isSupportTouch } from '@utils/index';

const classNamePrefix = 'username';

type usenameProps = {
  user?: User;
  className?: string;
  username?: string;
  disableLink?: boolean;
  hasVerified?: boolean;
} & PickFollowButtonProps;

const Usename: React.FC<usenameProps> = ({
  className,
  disableLink,
  hasVerified = true,
  ...rest
}) => {
  const [user, setUser] = useState<User>(rest?.user as User);
  const [enabled, setEnabled] = useState<boolean>(false);
  const isFetchedUserRef = useRef<boolean>(false);

  const { runAsync } = useFetch<User, [string]>(getUserByUsername, {
    manual: true,
    onSuccess(data) {
      setUser(data);
      setEnabled(true);
      isFetchedUserRef.current = true;
    },
    ignoreErrorMsg: true,
    onError() {
      isFetchedUserRef.current = true;
    },
  });

  useLayoutEffect(() => {
    setUser(rest.user as User);
  }, [rest.user]);

  const displayUsername = rest.username || user?.username;
  const username = displayUsername?.startsWith('@')
    ? displayUsername.slice(1)
    : displayUsername;

  useLayoutEffect(() => {
    if (user && !isSupportTouch) {
      setEnabled(true);
    }
  }, [user]);

  function fetchUser() {
    !isFetchedUserRef.current && rest.username && runAsync(username as string);
  }

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {disableLink ? (
        displayUsername
      ) : (
        <Popover
          openDelay={300}
          enabled={enabled}
          key={user?.id}
          content={
            isSupportTouch
              ? null
              : user && (
                  <UserCard
                    user={user}
                    {...rest}
                    onFollowingChange={(
                      uid,
                      { following, outgoingRequest },
                    ) => {
                      rest?.onFollowingChange?.(uid, {
                        following,
                        outgoingRequest,
                      });
                      if (!rest.user && rest.username) {
                        setUser(v => ({
                          ...v,
                          friendshipStatus: {
                            ...v.friendshipStatus,
                            following,
                            outgoingRequest,
                          },
                        }));
                      }
                    }}
                  />
                )
          }
          trigger="hover"
          placement="bottom-start"
        >
          <Link
            to={`/@${username}`}
            onClick={e => {
              e.stopPropagation();
            }}
            onMouseEnter={fetchUser}
            onFocus={fetchUser}
          >
            {displayUsername}
          </Link>
        </Popover>
      )}
      {user?.isVerified && hasVerified && (
        <VerifiedBadge
          fill="rgb(0, 149, 246)"
          size={12}
          viewBox="0 0 40 40"
          className={styles[`${classNamePrefix}-verified-badge`]}
        />
      )}
    </div>
  );
};

export default Usename;
