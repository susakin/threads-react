import React from 'react';
import { Post } from '@typings/index';
import { PostHeaderActionProps } from './PostHeaderAction';
import { useFetch } from '@hooks/useFetch';
import { Toast } from '@components/index';
import { postSave, postUnSave } from '@services/post';
import { useNavigate } from 'react-router-dom';
import { Save, UnSave } from '@components/Icon';

export type UseSaveProps = {
  post?: Post;
} & Pick<PostHeaderActionProps, 'onPostUpdate'>;

export const useSave = ({ post, onPostUpdate }: UseSaveProps) => {
  const { id, isSavedByViewer } = post || {};

  const navigate = useNavigate();
  const { run: _postSave } = useFetch(postSave, {
    manual: true,
    onSuccess() {
      onPostUpdate?.(id as string, { isSavedByViewer: true });
      Toast.show({
        duration: 5000,
        content: '已收藏',
        hasMinWith: true,
        action: '查看全部',
        onActionClick() {
          navigate(`/saved`);
        },
      });
    },
  });

  const { run: _postUnSave } = useFetch(postUnSave, {
    manual: true,
    onSuccess() {
      Toast.show({
        duration: 5000,
        content: '已取消保存',
        hasMinWith: true,
        action: '撤销',
        onActionClick() {
          _postSave(id as string);
        },
      });
      onPostUpdate?.(id as string, { isSavedByViewer: false });
    },
  });

  const item = {
    label: `${isSavedByViewer ? '取消' : ''}收藏`,
    onClick() {
      isSavedByViewer ? _postUnSave(id as string) : _postSave(id as string);
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
  };

  return { item };
};
