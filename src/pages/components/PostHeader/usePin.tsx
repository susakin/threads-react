import React from 'react';
import { Post } from '@typings/index';
import { useFetch } from '@hooks/useFetch';
import { Toast } from '@components/index';
import Modal from '@components/Modal';
import {
  pin,
  pinToComment,
  unpin,
  unpinToComment,
  getProfilePinned,
  getPostPinned,
} from '@services/post';
import { Pin } from '@components/Icon';
import UnPin from '@components/Icon/UnPin';

export type UsePinProps = {
  post?: Post;
  pinToWhere?: 'profile' | 'comment';
  onPinChange?: (id: string, pinned: boolean) => void;
};

export const usePin = ({ post, pinToWhere, onPinChange }: UsePinProps) => {
  const { id, isPinnedToProfile, isPinnedToComment } = post || {};
  const pinToProfile = pinToWhere === 'profile';

  const _hasPined = pinToProfile ? isPinnedToProfile : isPinnedToComment;

  const { runAsync: getPinned, loading } = useFetch(
    pinToProfile ? getProfilePinned : getPostPinned,
    {
      manual: true,
    },
  );

  async function _onPinClick() {
    if (_hasPined) {
      _unpin(id as string);
    } else {
      try {
        const res = await getPinned(post?.replyToPostId as any);
        if (res?.data) {
          Modal.confirm({
            title: '是否替换当前置顶内容？',
            content: pinToProfile
              ? '一次只能在主页中置顶一条串文。'
              : '一次只能在串文中置顶一条回复。',
            okType: 'default',
            onOk() {
              _pin(id as string);
            },
          });
        } else {
          _pin(id as string);
        }
      } catch (e) {
        _pin(id as string);
      }
    }
  }

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
  const pinProps = { viewBox: '0 0 20 20', size: 20 };
  const item = {
    label: _hasPined ? '取消置顶' : `置顶到${pinToProfile ? '主页' : '评论'}`,
    onClick: _onPinClick,
    icon: _hasPined ? <UnPin {...pinProps} /> : <Pin {...pinProps} />,
    loading,
  };

  return { item };
};
