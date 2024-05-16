import React, { useLayoutEffect, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AccessError, PageContainer } from '@pages/components';
import ProfileSummary from './ProfileSummary';
import ProfileAction from './ProfileAction';
import ProfilePosts from './ProfilePosts';
import { Spin } from '@components/Icon';
import styles from './index.module.less';
import { useFetch } from '@hooks/useFetch';
import { getUserByUsername } from '@services/profile';
import { User } from '@typings/index';
import { AuthContext } from '@context/AuthProvider';
import ErrorHint from './ErrorHint';
import { useTitle } from '@hooks/useTitle';
import FollowingRequest from './FollowingRequest';
import useCacheState from '@hooks/useCacheState';
import useScrollToTop from '@hooks/useScrollToTop';

const classNamePrefix = 'profile';

type Params = {
  username: string;
  action?: string;
};

const Profile: React.FC = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const { dispatch, state } = useContext(AuthContext);
  const pathPrefix = '@';
  const { username: name, action } = useParams<Params>();
  const [user, setUser] = useCacheState<User>(
    state.user?.username === name ? state.user : (undefined as any),
    `profile-${name}`,
  );

  useScrollToTop();

  const username = name?.substring(1);
  const isBanned =
    ((user?.isPrivate && !user?.friendshipStatus?.following) ||
      user?.friendshipStatus?.blocking ||
      user?.friendshipStatus?.blockedBy) &&
    !user?.friendshipStatus?.isOwn;

  const { loading, run } = useFetch<User, [string]>(getUserByUsername, {
    manual: true,
    onSuccess(data) {
      setUser(data);
    },
    onError() {
      setIsError(true);
    },
    ignoreErrorMsg: true,
  });
  const { setTitle } = useTitle();

  setTitle(user ? `${user?.fullName}(@${user?.username})` : '');

  useEffect(() => {
    if (
      user?.friendshipStatus?.isOwn &&
      state.user?.isPrivate !== user?.isPrivate &&
      user
    ) {
      setUser(user => {
        user.isPrivate = state.user?.isPrivate;
        return { ...user };
      });
    }
  }, [state.user, user]);

  useLayoutEffect(() => {
    !user && run(username as string);
  }, [username, user]);

  if (loading) {
    return (
      <div className={styles[`${classNamePrefix}-loading`]}>
        <Spin size={20} viewBox="0 0 100 100" />
      </div>
    );
  }

  if (!name?.startsWith(pathPrefix) || name === pathPrefix || isError)
    return <AccessError className={styles[`${classNamePrefix}-error`]} />;

  return (
    <PageContainer>
      <FollowingRequest
        user={user}
        onUserFieldUpdate={updateFields => {
          setUser(v => ({ ...v, ...updateFields }) as any);
        }}
      />
      <ProfileSummary
        user={user}
        onUserFieldUpdate={updateFields => {
          setUser(v => ({ ...v, ...updateFields }) as any);
        }}
      />
      <ProfileAction
        user={user}
        onUserFieldUpdate={updateFields => {
          setUser(v => ({ ...v, ...updateFields }) as any);
          dispatch({
            type: 'UPDATE_USER',
            payload: {
              user: updateFields,
            },
          });
        }}
      />
      <ProfilePosts
        isBanned={isBanned}
        user={user as any}
        activeKey={action || ''}
        onUserFieldUpdate={updateFields => {
          setUser(v => ({ ...v, ...updateFields }) as any);
        }}
      />
      {isBanned && (
        <ErrorHint
          hint={
            user?.friendshipStatus?.blocking ? '内容无法显示' : '这是私密主页。'
          }
        />
      )}
    </PageContainer>
  );
};

export default Profile;
