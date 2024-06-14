import React, { useMemo, useState } from 'react';
import {
  ShortenNumber,
  ActiveScaleButton,
  Popover,
  PopoverMenu,
  PopoverMenuItem,
  Link,
} from '@components/index';
import { UserPreview } from '@pages/components';
import { Instagram, MoreOutline, Restrict, Restricted } from '@components/Icon';
import FollowerModal from './FollowerModal';
import ProfileModal from './ProfileModal';
import styles from './profileFollower.module.less';
import { User } from '@typings/index';
import Modal from '@components/Modal';
import { useFetch } from '@hooks/useFetch';
import { deleteFollow, restricte, unrestricte } from '@services/profile';
import Toast from '@components/Toast';
import cs from 'classnames';
import { useBlock } from '@pages/components/PostHeader/useBlock';
import { UseMuteProps, useMute } from '@pages/components/PostHeader/useMute';
import Info from '@components/Icon/Info';
import { Link as LinkIcon } from '@components/Icon';
import RemoveFans from '@components/Icon/RemoveFans';
import { copyText } from '@utils/clipboard';
import { isSupportTouch } from '@utils/index';
import PopupMenu from '@components/PopupMenu';
import { getMenuGroup } from '@pages/components/PostHeader/PostHeaderAction';
const classNamePrefix = 'profile-follower';

type ProfileFollowerProps = {
  user?: User;
  onUserFieldUpdate?: (user: Partial<User>) => void;
};

const ProfileFollower: React.FC<ProfileFollowerProps> = ({
  user,
  onUserFieldUpdate,
}) => {
  const [followerModalVisible, setFollowerModalVisible] =
    useState<boolean>(false);
  const [profileModalVisible, setProfileModalVisible] =
    useState<boolean>(false);
  const isOwn = user?.friendshipStatus?.isOwn;
  const isPrivate =
    user?.isPrivate && !isOwn && !user?.friendshipStatus?.following;
  const isRestricting = user?.friendshipStatus?.restricting;

  const { followerCount, profileContextFacepileUsers, bioLink } = user || {};
  const [popupMenuVisible, setPopupMenuVisible] = useState<boolean>(false);

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

  const { item: muteItem } = useMute(actionProps);
  const { item } = useBlock(actionProps);

  const { run } = useFetch(deleteFollow, {
    manual: true,
    onSuccess() {
      Toast.show('已移除');
      onUserFieldUpdate?.({
        friendshipStatus: {
          ...user?.friendshipStatus,
          followedBy: false,
        },
      });
    },
  });

  const { run: _restricte } = useFetch(restricte, {
    manual: true,
    onSuccess() {
      Toast.show('已限制');
      onUserFieldUpdate?.({
        friendshipStatus: {
          ...user?.friendshipStatus,
          restricting: true,
        },
      });
    },
  });

  const { run: _unrestricte } = useFetch(unrestricte, {
    manual: true,
    onSuccess() {
      Toast.show('已取消限制');
      onUserFieldUpdate?.({
        friendshipStatus: {
          ...user?.friendshipStatus,
          restricting: false,
        },
      });
    },
  });

  const menus = useMemo<PopoverMenuItem[]>(() => {
    const items: any = [
      {
        label: '复制链接',
        icon: <LinkIcon viewBox="0 0 18 18" size={21} fill="transparent" />,
        onClick() {
          copyText(`${window.location.origin}/@${user?.username}`);
        },
      },
      {
        label: '关于这个主页',
        onClick() {
          setProfileModalVisible(true);
        },
        icon: <Info viewBox="0 0 24 24" size={20} />,
        split: true,
      },
    ];

    if (!isOwn) {
      items.push(muteItem, {
        label: `${isRestricting ? '取消' : ''}限制 `,
        onClick() {
          !isRestricting
            ? _restricte(user?.id as any)
            : _unrestricte(user?.id as string);
        },
        icon: isRestricting ? (
          <Restricted viewBox="0 0 20 20" size={20} />
        ) : (
          <Restrict viewBox="0 0 20 20" size={20} />
        ),
      });
    }
    if (user?.friendshipStatus?.followedBy) {
      items.push({
        label: '移除粉丝',
        onClick() {
          Modal.confirm({
            title: '移除粉丝？',
            content: `我们不会告诉${user?.username}你将 TA 移除了。`,
            okText: '移除',
            okType: 'danger',
            onOk() {
              run(user?.id);
            },
          });
        },
        icon: <RemoveFans viewBox="0 0 20 20" size={20} />,
        split: true,
      });
    }
    if (!isOwn) {
      items.push(item);
    }

    return items;
  }, [user?.friendshipStatus?.followedBy, isRestricting, item]);

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div
        className={styles[`${classNamePrefix}-preview`]}
        onClick={() => {
          !isPrivate && setFollowerModalVisible(true);
        }}
        role="button"
        tabIndex={0}
      >
        <UserPreview
          urls={
            profileContextFacepileUsers?.map(item => item.profilePicUrl) as any
          }
        />
        <span
          className={cs({
            [styles[`${classNamePrefix}-preview-count`]]: !isPrivate,
          })}
        >
          <ShortenNumber value={followerCount as number} /> 位粉丝
        </span>
      </div>
      {bioLink && (
        <div className={styles[`${classNamePrefix}-bio`]}>
          <span className={styles[`${classNamePrefix}-bio-split`]}>·</span>
          <Link
            className={styles[`${classNamePrefix}-bio-link`]}
            href={bioLink}
          />
        </div>
      )}
      <div className={styles[`${classNamePrefix}-action`]}>
        <ActiveScaleButton
          size={24}
          className={styles[`${classNamePrefix}-action-button`]}
        >
          <Instagram size={24} viewBox="0 0 24 24" />
        </ActiveScaleButton>
        {!isOwn && (
          <ActiveScaleButton
            size={24}
            className={styles[`${classNamePrefix}-action-button`]}
            onClick={() => {
              isSupportTouch && setPopupMenuVisible(true);
            }}
          >
            <Popover
              hideWhenContentClick
              enabled={!isSupportTouch}
              placement="bottom-end"
              content={<PopoverMenu items={menus} />}
            >
              <MoreOutline size={24} viewBox="0 0 24 24" />
            </Popover>
          </ActiveScaleButton>
        )}
      </div>
      <FollowerModal
        user={user}
        visible={followerModalVisible}
        onClose={() => {
          setFollowerModalVisible(false);
        }}
      />
      <ProfileModal
        user={user}
        visible={profileModalVisible}
        onClose={() => {
          setProfileModalVisible(false);
        }}
      />
      <PopupMenu
        visible={popupMenuVisible}
        onClose={() => {
          setPopupMenuVisible(false);
        }}
        items={getMenuGroup(menus)}
      />
    </div>
  );
};

export default ProfileFollower;
