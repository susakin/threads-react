import React, { useState } from 'react';
import Button from '@components/Button';
import styles from './followRequest.module.less';
import { User } from '@typings/index';
import FollowButton, { OnFollowingChange } from '../FollowButton';
import { followRequest, unfollowRequest } from '@services/profile';
import { useFetch } from '@hooks/useFetch';

const classNamePrefix = 'follow-request';

type FollowRequestProps = {
  user: User;
  onDelete?: () => void;
} & OnFollowingChange;

const FollowRequest: React.FC<FollowRequestProps> = ({
  user,
  onFollowingChange,
  onDelete,
}) => {
  const [argee, setArgee] = useState<boolean>(false);
  const { run: _followRequest, loading: followRequestLoading } = useFetch(
    followRequest,
    {
      manual: true,
      onSuccess() {
        setArgee(true);
      },
    },
  );

  const { run: _unfollowRequest, loading: unfollowRequestLoading } = useFetch(
    unfollowRequest,
    {
      manual: true,
      onSuccess() {
        onDelete?.();
      },
    },
  );

  return (
    <div className={styles[`${classNamePrefix}`]}>
      {!argee ? (
        <>
          <Button
            loading={followRequestLoading}
            disabled={unfollowRequestLoading}
            onClick={() => {
              _followRequest(user.id);
            }}
          >
            确认
          </Button>
          <Button
            loading={unfollowRequestLoading}
            disabled={followRequestLoading}
            onClick={() => {
              _unfollowRequest(user.id);
            }}
          >
            隐藏
          </Button>
        </>
      ) : (
        <FollowButton
          className={styles[`${classNamePrefix}-follow-button`]}
          user={user}
          onFollowingChange={onFollowingChange}
        />
      )}
    </div>
  );
};

export default FollowRequest;
