import React, { useMemo, useState } from 'react';
import {
  More,
  Edited,
  Pin,
  Direction,
  UnFollow,
  UnSave,
  Save,
  Unlike,
  Delete,
  Hide,
} from '@components/Icon';
import {
  ActiveScaleButton,
  Popover,
  PopoverMenu,
  PopoverMenuItem,
  Toast,
} from '@components/index';
import styles from './postHeaderAction.module.less';
import { OnPostUpdate } from '../Post';
import {
  deletePost,
  pin,
  unpin,
  pinToComment,
  unpinToComment,
  hidePost,
  updateLikeAndViewCounts,
  postSave,
  postUnSave,
} from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { unfollow } from '@services/profile';
import { useCountDown } from 'ahooks';
import Modal from '@components/Modal';
import { FriendshipStatus, Post } from '@typings/index';
import dayjs from 'dayjs';
import { OnFollowingChange } from '../FollowButton';

import ReplyAuthModal from '../ReplyAuthModal';
import { useBlock } from './useBlock';
import { useNavigate } from 'react-router-dom';
import { useMute } from './useMute';

const classNamePrefix = 'post-header-action';

export type PostHeaderActionProps = {
  hasAction?: boolean;
  onDelete?: (id: string) => void;
  onPinChange?: (id: string, pinned: boolean) => void;
  post?: Post;
  hasPin?: boolean;
  hasPined?: boolean;
  pinToWhere?: 'profile' | 'comment';
  onEditClick?: () => void;
  onUserFriendshipStatusUpdate?: (
    uid: string,
    friendshipStatus: FriendshipStatus,
  ) => void;
} & OnPostUpdate &
  OnFollowingChange;

const PostHeaderAction: React.FC<PostHeaderActionProps> = ({
  hasAction,
  post,
  onPostUpdate,
  onDelete,
  onPinChange,
  onFollowingChange,
  hasPin,
  hasPined,
  pinToWhere,
  onEditClick,
  onUserFriendshipStatusUpdate,
}) => {
  const {
    captionIsEdited,
    createdAt = 0,
    id = '',
    isPinnedToProfile,
    isPinnedToComment,
  } = post || {};

  const { friendshipStatus } = post?.user || {};
  const [replyAuthVisible, setReplyAuthVisible] = useState<boolean>(false);
  const pinToProfile = pinToWhere === 'profile';

  const { item } = useBlock({ user: post?.user, onUserFriendshipStatusUpdate });

  const { item: muteItem } = useMute({
    user: post?.user,
    onUserFriendshipStatusUpdate,
  });

  const { run: _deletePost } = useFetch(deletePost, {
    manual: true,
    onSuccess() {
      onDelete?.(id as string);
      Toast.show('已删除');
    },
  });

  const { run: _pin } = useFetch(pinToProfile ? pin : pinToComment, {
    manual: true,
    onSuccess() {
      Toast.show('已置顶');
      onPinChange?.(id as string, true);
    },
  });

  const { run: _unpin } = useFetch(pinToProfile ? unpin : unpinToComment, {
    manual: true,
    onSuccess() {
      Toast.show('已取消置顶');
      onPinChange?.(id as string, false);
    },
  });
  const navigate = useNavigate();
  const { run: _postSave } = useFetch(postSave, {
    manual: true,
    onSuccess() {
      Toast.show({
        duration: 5000,
        content: '已收藏',
        hasMinWith: true,
        action: '查看全部',
        onActionClick() {
          navigate(`/saved`);
        },
      });
      onPostUpdate?.(id as string, { isSavedByViewer: true });
    },
  });

  const { run: _postUnSave } = useFetch(postUnSave, {
    manual: true,
    onSuccess() {
      Toast.show('已取消收藏');
      onPostUpdate?.(id as string, { isSavedByViewer: false });
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

  const leftTime = useMemo(() => {
    const step = 5 * 60 * 1000;

    if (Date.now() - createdAt < step) {
      return createdAt + step - Date.now();
    }
    return 0;
  }, [createdAt]);

  const [countdown] = useCountDown({ leftTime });

  const _hasPined = pinToProfile ? isPinnedToProfile : isPinnedToComment;

  function _onPinClick() {
    if (_hasPined) {
      _unpin(id);
    } else {
      if (hasPined) {
        Modal.confirm({
          title: '是否替换当前置顶内容？',
          content: pinToProfile
            ? '一次只能在主页中置顶一条串文。'
            : '一次只能在串文中置顶一条回复。',
          okType: 'default',
          onOk() {
            _pin(id);
          },
        });
      } else {
        _pin(id);
      }
    }
  }

  const menu: PopoverMenuItem[] = useMemo(() => {
    const { isSavedByViewer, id = '' } = post || {};
    const items: PopoverMenuItem[] = [
      {
        label: `${isSavedByViewer ? '取消' : ''}收藏`,
        onClick() {
          isSavedByViewer ? _postUnSave(id) : _postSave(id as string);
        },
        icon: isSavedByViewer ? (
          <UnSave viewBox="0 0 20 20" size={20} fill="currentColor" />
        ) : (
          <Save
            viewBox="0 0 20 20"
            size={20}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          />
        ),
      },
    ];

    if (hasPin) {
      items.unshift({
        label: _hasPined
          ? '取消置顶'
          : `置顶到${pinToProfile ? '主页' : '评论'}`,
        onClick: _onPinClick,
        icon: <Pin viewBox="0 0 20 20" size={20} />,
      });
    }

    if (friendshipStatus?.isOwn) {
      items.push(
        {
          label: `${
            post?.likeAndViewCountsDisabled ? '取消' : ''
          }隐藏获赞数和分享次数`,
          onClick() {
            _updateLikeAndViewCounts(post?.id as string, {
              likeAndViewCountsDisabled: !post?.likeAndViewCountsDisabled,
            });
          },
          icon: <Unlike viewBox="0 0 20 20" size={20} />,
        },
        {
          label: '谁可以回复',
          onClick() {
            setReplyAuthVisible(true);
          },
          split: true,
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
        },
        {
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
        },
      );

      if (countdown > 0 && leftTime) {
        items.unshift({
          label: (
            <div className={styles[`${classNamePrefix}-countdown`]}>
              <div className={styles[`${classNamePrefix}-countdown-lable`]}>
                编辑
              </div>
              <div className={styles[`${classNamePrefix}-countdown-value`]}>
                {dayjs(countdown).format('mm:ss')}
              </div>
            </div>
          ),
          onClick: () => {
            onEditClick?.();
          },
          split: true,
        });
      }
    } else {
      items.push(
        {
          label: '隐藏',
          onClick() {
            _hidePost(post?.id as string);
          },
          icon: <Hide viewBox="0 0 20 20" size={20} />,
          split: true,
        },
        muteItem,
      );
      if (friendshipStatus?.following) {
        items.push({
          label: '停止关注',
          onClick: () => {
            runUnfollow(post?.user.id as string);
          },
          icon: <UnFollow viewBox="0 0 20 20" size={20} />,
        });
      } else {
        items.push(item);
      }
    }

    return items;
  }, [
    post,
    countdown,
    hasPin,
    post?.user?.friendshipStatus,
    _hasPined,
    hasPined,
    post?.likeAndViewCountsDisabled,
    post?.replyAuth,
    post?.isSavedByViewer,
    muteItem,
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
        <Popover
          placement="bottom-end"
          offset={5}
          hideWhenContentClick
          content={<PopoverMenu items={menu} />}
        >
          <ActiveScaleButton
            className={styles[`${classNamePrefix}-button`]}
            size={20}
          >
            <More fill="currentColor" size={20} viewBox="0 0 24 24" />
          </ActiveScaleButton>
        </Popover>
      )}

      <ReplyAuthModal
        post={post}
        onPostUpdate={onPostUpdate}
        visible={replyAuthVisible}
        onClose={() => {
          setReplyAuthVisible(false);
        }}
      />
    </div>
  );
};

export default PostHeaderAction;
