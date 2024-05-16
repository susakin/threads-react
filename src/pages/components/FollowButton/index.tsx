import React from 'react';
import Button, { ButtonProps } from '@components/Button';
import cs from 'classnames';
import styles from './index.module.less';
import { follow, unfollow } from '@services/profile';
import Toast from '@components/Toast';
import { useFetch } from '@hooks/useFetch';
import { User } from '@typings/index';
import Modal from '@components/Modal';

export type OnFollowingChange = {
  onFollowingChange?: (
    uid: string,
    updateFiled: { following?: boolean; outgoingRequest?: boolean },
  ) => void;
};

export type FollowButtonProps = {
  user: User;
} & Omit<ButtonProps, 'children' | 'onClick'> &
  OnFollowingChange;

const FollowButton: React.FC<FollowButtonProps> = ({
  onFollowingChange,
  className,
  user,
  ...rest
}) => {
  const { id, friendshipStatus, isPrivate } = user || {};
  const { followedBy, following, outgoingRequest } = friendshipStatus || {};
  const { run: runFollow, loading: followLoading } = useFetch(follow, {
    manual: true,
    onSuccess() {
      onFollowingChange?.(
        id,
        isPrivate ? { outgoingRequest: true } : { following: true },
      );
    },
  });

  const { run: runUnfollow, loading: unfollowLoading } = useFetch(unfollow, {
    manual: true,
    onSuccess() {
      onFollowingChange?.(
        id,
        outgoingRequest ? { outgoingRequest: false } : { following: false },
      );
      Toast.show('已停止关注');
    },
  });

  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (following) {
      if (isPrivate) {
        Modal.confirm({
          title: `停止关注${user?.username}`,
          content: `如果希望重新关注${user?.username}，你需要再次发送申请。`,
          okText: '停止关注',
          okType: 'danger',
          onOk() {
            runUnfollow(id);
          },
        });
        return;
      }
    }
    outgoingRequest || following ? runUnfollow(id) : runFollow(id);
  }

  return (
    <Button
      onClick={onClick}
      loading={followLoading || unfollowLoading}
      className={cs(className, {
        [styles['followed']]: following && rest.type !== 'primary',
      })}
      {...rest}
    >
      {outgoingRequest
        ? '已请求'
        : following
        ? '已关注'
        : followedBy
        ? '回粉'
        : '关注'}
    </Button>
  );
};

export default FollowButton;
