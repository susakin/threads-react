import React, { useState } from 'react';
import { Button } from '@components/index';
import cs from 'classnames';
import styles from './profileAction.module.less';
import ProfileEditModal from './ProfileEditModal';
import { User } from '@typings/index';
import FollowButton from '@pages/components/FollowButton';
import { copyText } from '@utils/clipboard';
import { isSupportTouch } from '@utils/index';
import { PostEditModal } from '@pages/components';
import { useBlock } from '@pages/components/PostHeader/useBlock';
import { UseMuteProps } from '@pages/components/PostHeader/useMute';

const classNamePrefix = 'profile-action';

type ProfileActionProps = {
  user?: User;
  onUserFieldUpdate?: (user: Partial<Omit<User, 'id'>>) => void;
};

const ProfileAction: React.FC<ProfileActionProps> = ({
  user,
  onUserFieldUpdate,
}) => {
  const [profileEditVisible, setProfileEditVisible] = useState<boolean>(false);
  const [postEditVisible, setPostEditVisible] = useState<boolean>(false);
  const { friendshipStatus, username, mentionAuth } = user || {};
  const isOwn = friendshipStatus?.isOwn;
  const isBlocking = friendshipStatus?.blocking;
  const hasMention =
    mentionAuth === 'everyone' ||
    (mentionAuth === 'following' && friendshipStatus?.following);

  function onShare() {
    const url = `${window.location.origin}/@${username}`;
    if (navigator?.share) {
      navigator.share({
        title: username,
        url,
      });
    } else {
      copyText(url);
    }
  }

  const actionProps: UseMuteProps = {
    user,
    onUserFriendshipStatusUpdate(uid, friendshipStatus) {
      onUserFieldUpdate?.({
        friendshipStatus: {
          ...user?.friendshipStatus,
          ...friendshipStatus,
        },
      });
    },
  };

  const { item, unblockLoading } = useBlock(actionProps);

  return (
    <>
      <div className={cs(styles[`${classNamePrefix}`])}>
        {isBlocking ? (
          <Button
            loading={unblockLoading}
            className={styles[`${classNamePrefix}-button`]}
            onClick={() => {
              item.onClick();
            }}
          >
            取消拉黑
          </Button>
        ) : isOwn ? (
          <>
            <Button
              className={styles[`${classNamePrefix}-button`]}
              onClick={() => {
                setProfileEditVisible(true);
              }}
            >
              编辑主页
            </Button>
            {isSupportTouch && (
              <Button
                className={styles[`${classNamePrefix}-button`]}
                onClick={onShare}
              >
                分享主页
              </Button>
            )}
          </>
        ) : (
          <>
            <FollowButton
              user={user as any}
              className={styles[`${classNamePrefix}-button`]}
              type={
                friendshipStatus?.following || friendshipStatus?.followedBy
                  ? 'default'
                  : 'primary'
              }
              onFollowingChange={(uid, { following, outgoingRequest }) => {
                onUserFieldUpdate?.({
                  friendshipStatus: {
                    ...friendshipStatus,
                    following,
                    outgoingRequest,
                  },
                });
              }}
            />
            {hasMention && (
              <Button
                className={styles[`${classNamePrefix}-button`]}
                onClick={() => {
                  setPostEditVisible(true);
                }}
              >
                提及
              </Button>
            )}
          </>
        )}
      </div>
      <ProfileEditModal
        user={user}
        visible={profileEditVisible}
        onUserFieldUpdate={onUserFieldUpdate}
        onClose={() => {
          setProfileEditVisible(false);
        }}
      />
      <PostEditModal
        visible={postEditVisible}
        mentionUser={user}
        onClose={() => {
          setPostEditVisible(false);
        }}
      />
    </>
  );
};

export default ProfileAction;
