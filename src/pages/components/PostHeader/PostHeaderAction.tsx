import React, { useMemo, useState } from 'react';
import {
  More,
  Edited,
  Direction,
  UnFollow,
  Unlike,
  Delete,
  Hide,
  Tag,
} from '@components/Icon';
import { ActiveScaleButton, PopoverMenuItem, Toast } from '@components/index';
import styles from './postHeaderAction.module.less';
import { OnPostUpdate } from '../Post';
import { deletePost, hidePost, updateLikeAndViewCounts } from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { unfollow } from '@services/profile';
import Modal from '@components/Modal';
import { FriendshipStatus, Post } from '@typings/index';
import { OnFollowingChange } from '../FollowButton';

import ReplyAuthModal from '../ReplyAuthModal';
import { useBlock } from './useBlock';
import { useMute } from './useMute';
import { usePin, UsePinProps } from './usePin';
import { useEdit, UseEditProps } from './useEdit';
import { useSave } from './useSave';
import { useCopy } from './useCopy';
import PopupMenu from '@components/PopupMenu';
import { isSupportTouch } from '@utils/index';
import PopoverMenu from '@components/Popover/PopoverMenu';

const classNamePrefix = 'post-header-action';

export type PostHeaderActionProps = {
  hasAction?: boolean;
  onDelete?: (id: string) => void;
  post?: Post;
  hasPin?: boolean;
  onTagClick?: () => void;
  onUserFriendshipStatusUpdate?: (
    uid: string,
    friendshipStatus: FriendshipStatus,
  ) => void;
} & OnPostUpdate &
  OnFollowingChange &
  Pick<UseEditProps, 'onEditClick'> &
  Pick<UsePinProps, 'onPinChange' | 'pinToWhere'>;

const PostHeaderAction: React.FC<PostHeaderActionProps> = ({
  hasAction = true,
  post,
  onPostUpdate,
  onDelete,
  onPinChange,
  onFollowingChange,
  hasPin,
  pinToWhere,
  onTagClick,
  onEditClick,
  onUserFriendshipStatusUpdate,
}) => {
  const {
    captionIsEdited,
    createdAt = 0,
    id = '',
    textEntities,
    code,
  } = post || {};

  const { friendshipStatus } = post?.user || {};
  const [replyAuthVisible, setReplyAuthVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const { item: blockItem } = useBlock({
    user: post?.user,
    onUserFriendshipStatusUpdate,
  });
  const { item: editItem } = useEdit({
    createdAt,
    onEditClick,
    isOwn: post?.user?.friendshipStatus.isOwn,
  });
  const { item: pinItem } = usePin({
    post,
    onPinChange,
    pinToWhere,
  });
  const { item: saveItem } = useSave({ post, onPostUpdate });

  const { item: muteItem } = useMute({
    user: post?.user,
    onUserFriendshipStatusUpdate,
  });

  const { item: copyItem } = useCopy({ postCode: code });

  const { run: _deletePost } = useFetch(deletePost, {
    manual: true,
    onSuccess() {
      onDelete?.(id as string);
      Toast.show('已删除');
    },
  });

  const { run: _hidePost } = useFetch(hidePost, {
    manual: true,
    onSuccess() {
      onPostUpdate?.(id as string, { isHiddenByViewer: true });
    },
  });

  const { run: runUnfollow } = useFetch(unfollow, {
    manual: true,
    onSuccess() {
      onFollowingChange?.(post?.user.id as string, { following: false });
      Toast.show('已停止关注');
    },
  });

  const { run: _updateLikeAndViewCounts } = useFetch(updateLikeAndViewCounts, {
    manual: true,
    onSuccess(res, [id, { likeAndViewCountsDisabled }]) {
      onPostUpdate?.(id, {
        likeAndViewCountsDisabled,
      });
      Toast.show(
        likeAndViewCountsDisabled ? '点赞和分享已隐藏' : '点赞和分享已取消隐藏',
      );
    },
  });

  const menu: Array<PopoverMenuItem[]> = useMemo(() => {
    const hasTag = textEntities?.some(item => item.type === 'tag');
    const eidtGroup: PopoverMenuItem[] = [
      editItem as any,
      hasTag
        ? {
            label: '用标记创建',
            icon: (
              <Tag
                viewBox="2 2 20 20"
                size={20}
                strokeLinecap="round"
                strokeWidth={1.5}
                stroke="currentColor"
              />
            ),
            split: true,
            onClick: onTagClick,
          }
        : (null as any),
    ];

    const likeItem = {
      label: `${
        post?.likeAndViewCountsDisabled ? '取消' : ''
      }隐藏获赞数和分享次数`,
      onClick() {
        _updateLikeAndViewCounts(post?.id as string, {
          likeAndViewCountsDisabled: !post?.likeAndViewCountsDisabled,
        });
      },
      icon: <Unlike viewBox="0 0 20 20" size={20} />,
    };

    const replyItem = {
      label: '谁能回复和引用',
      onClick() {
        setReplyAuthVisible(true);
      },
      icon: (
        <Direction
          viewBox="0 0 24 24"
          size={16}
          style={{
            transform: 'rotate(180deg)',
            color: 'var(--barcelona-secondary-icon)',
          }}
        />
      ),
    };

    const interstItem = {
      label: '没兴趣',
      onClick() {
        _hidePost(post?.id as string);
      },
      icon: <Hide viewBox="0 0 20 20" size={20} />,
    };

    const isOwn = friendshipStatus?.isOwn;
    const saveGroup: PopoverMenuItem[] = [
      saveItem,
      hasPin ? pinItem : (undefined as any),
      isOwn ? likeItem : (undefined as any),
      isOwn ? replyItem : (undefined as any),
      !isOwn ? interstItem : (undefined as any),
    ];

    const stopFollowItem = {
      label: '停止关注',
      onClick: () => {
        runUnfollow(post?.user.id as string);
      },
      icon: <UnFollow viewBox="0 0 20 20" size={20} />,
    };

    const muteGroup: PopoverMenuItem[] = [
      !isOwn ? muteItem : (undefined as any),
      !isOwn
        ? friendshipStatus?.following
          ? stopFollowItem
          : blockItem
        : (undefined as any),
    ];

    const deleteItem: PopoverMenuItem = {
      label: '删除',
      danger: true,
      onClick() {
        Modal.confirm({
          title: '删除帖子？',
          content: '这篇帖子一旦删除便无法恢复。',
          okType: 'danger',
          okText: '删除',
          onOk: () => {
            _deletePost(id);
          },
        });
      },
      icon: <Delete viewBox="0 0 20 20" size={20} />,
    };

    const deleteGroup: PopoverMenuItem[] = [
      isOwn ? deleteItem : (undefined as any),
    ];

    const copyGroup: PopoverMenuItem[] = [copyItem];

    return [eidtGroup, saveGroup, muteGroup, deleteGroup, copyGroup];
  }, [
    post,
    hasPin,
    post?.user?.friendshipStatus,
    post?.likeAndViewCountsDisabled,
    post?.replyAuth,
    saveItem,
    muteItem,
    pinItem,
    editItem,
  ]);

  return (
    <div
      className={styles[`${classNamePrefix}`]}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {captionIsEdited && (
        <ActiveScaleButton
          className={styles[`${classNamePrefix}-button`]}
          size={20}
          onClick={() => {
            Toast.show('这篇帖子已经过编辑。');
          }}
        >
          <Edited fill="currentColor" size={16} viewBox="0 0 20.1325 21.186" />
        </ActiveScaleButton>
      )}
      {hasAction && menu.length !== 0 && (
        <PopoverMenu
          placement="bottom-end"
          offset={5}
          hideWhenContentClick
          enabled={!isSupportTouch}
          menus={menu}
        >
          <ActiveScaleButton
            className={styles[`${classNamePrefix}-button`]}
            size={20}
            onClick={() => {
              isSupportTouch && setMenuVisible(true);
            }}
          >
            <More fill="currentColor" size={20} viewBox="0 0 24 24" />
          </ActiveScaleButton>
        </PopoverMenu>
      )}

      <ReplyAuthModal
        post={post}
        onPostUpdate={onPostUpdate}
        visible={replyAuthVisible}
        onClose={() => {
          setReplyAuthVisible(false);
        }}
      />
      <PopupMenu
        items={menu as any}
        visible={menuVisible}
        onClose={() => {
          setMenuVisible(false);
        }}
      />
    </div>
  );
};

export default PostHeaderAction;
