import React from 'react';
import styles from './followingRequest.module.less';
import { User } from '@typings/index';
import Button from '@components/Button';
import { useFetch } from '@hooks/useFetch';
import { followRequest, unfollowRequest } from '@services/profile';

const classNamePrefix = 'following-request';

type FollowingRequestProps = {
  user?: User;
  onUserFieldUpdate?: (user: Partial<User>) => void;
};

const FollowingRequest: React.FC<FollowingRequestProps> = ({
  user,
  onUserFieldUpdate,
}) => {
  const { run: _followRequest, loading: followRequestLoading } = useFetch(
    followRequest,
    {
      manual: true,
      onSuccess() {
        onUserFieldUpdate?.({
          friendshipStatus: {
            ...user?.friendshipStatus,
            followedBy: true,
            outgoingRequestedBy: false,
          },
        });
      },
    },
  );

  const { run: _unfollowRequest, loading: unfollowRequestLoading } = useFetch(
    unfollowRequest,
    {
      manual: true,
      onSuccess() {
        onUserFieldUpdate?.({
          friendshipStatus: {
            ...user?.friendshipStatus,
            outgoingRequestedBy: false,
          },
        });
      },
    },
  );

  if (!user?.friendshipStatus?.outgoingRequestedBy) return null;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <div className={styles[`${classNamePrefix}-inner-hint`]}>
          <div className={styles[`${classNamePrefix}-inner-hint-username`]}>
            {user?.username}
          </div>
          <div className={styles[`${classNamePrefix}-inner-hint-text`]}>
            请求关注你
          </div>
        </div>
        <div className={styles[`${classNamePrefix}-inner-action`]}>
          <Button
            className={styles[`${classNamePrefix}-inner-action-button`]}
            loading={unfollowRequestLoading}
            onClick={() => {
              _unfollowRequest(user?.id as string);
            }}
          >
            拒绝
          </Button>
          <Button
            className={styles[`${classNamePrefix}-inner-action-button`]}
            type="primary"
            loading={followRequestLoading}
            onClick={() => {
              _followRequest(user?.id as string);
            }}
          >
            确认
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FollowingRequest;
