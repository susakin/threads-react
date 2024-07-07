import React, { useRef, useState } from 'react';
import { EditPost } from '.';
import { Post, ReplyAuth, User } from '@typings/index';
import { cloneDeep } from 'lodash';
import { createPost, updatePost } from '@services/post';
import { OnFollowingChange } from '../FollowButton';
import { Toast } from '@components/index';
import PostEdit, { PostEditProps } from './PostEdit';
import Modal from '@components/Modal';

import { useNavigate } from 'react-router-dom';
import { useCountDown } from 'ahooks';

export type PostEditFormProps = {
  replyPost?: Post;
  editPost?: Post;
  editPosts: EditPost[];
  canSubmit?: boolean;
  onUpdate?: (
    id: string,
    updateFiled: Pick<
      Post,
      'caption' | 'medias' | 'captionIsEdited' | 'textEntities'
    >,
  ) => void;
  user?: User;
  onSubmit?: () => void;
  onSuccess?: (post: Post) => void;
  active?: boolean;
} & OnFollowingChange &
  Pick<
    PostEditProps,
    'onAccessibilityClick' | 'onUpdatePost' | 'onDeletePost' | 'onAddPost'
  >;

type UploadPostProps = {
  posts?: EditPost[];
  replyToPostId?: string;
  retryCount?: number;
  onSuccess?: (postCode: string, firstPost: Post) => void;
  onError?: (msg: string) => void;
  firstPostCode?: string;
  firstPost?: Post;
};

const PostEditForm: React.FC<PostEditFormProps> = ({
  replyPost,
  editPost,
  editPosts,
  onUpdate,
  onFollowingChange,
  user,
  canSubmit,
  onSuccess,
  active,
  ...rest
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const now = Date.now();
  const editCountDown = 5 * 60 * 1000;
  const editTimeGap = editCountDown - (now - (editPost?.createdAt || 0));
  const [editTimeUp, setEditTimeUp] = useState<boolean>(false);
  const navigate = useNavigate();
  const replyAuthRef = useRef<ReplyAuth>('everyone');

  const uploadPost = async ({
    posts,
    replyToPostId,
    retryCount = 3, // 添加重试次数参数，默认为3次
    onSuccess,
    onError,
    firstPost,
    firstPostCode,
  }: UploadPostProps) => {
    const _posts = cloneDeep(posts);
    const post = posts?.shift();
    try {
      const isEdit = editPost && _posts?.length === editPosts.length;
      const tallies = post?.poll?.tallies?.filter?.(
        item => item?.text?.trim?.()?.length,
      );
      const { code, data, msg }: any = await (isEdit ? updatePost : createPost)(
        {
          ...post,
          replyToPostId,
          quotedPostId: post?.quotedPost?.id,
          replyAuth: replyAuthRef.current,
          medias: post?.medias?.map((item: any) => {
            delete item.tempUrl;
            return item;
          }),
          caption: post?.caption?.replace(
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            '',
          ),
          poll: (tallies?.length || 0) >= 2 ? { tallies } : null,
        },
      );
      if (code === 200) {
        isEdit &&
          onUpdate?.(post?.id as string, {
            caption: post?.caption,
            medias: post?.medias,
            captionIsEdited: true,
            textEntities: post?.textEntities,
          }); //编辑成功之后抛出事件
        if (!firstPostCode) {
          firstPostCode = data?.code;
          firstPost = data as any;
        }
        if (posts?.length) {
          await uploadPost({
            posts,
            replyToPostId: data?.id,
            retryCount,
            onSuccess,
            onError,
            firstPostCode,
          });
        } else {
          onSuccess?.(firstPostCode as string, firstPost as Post);
        }
      } else if (retryCount > 0) {
        await uploadPost({
          posts: _posts,
          replyToPostId,
          retryCount: retryCount - 1,
          onSuccess,
          onError,
        });
      } else {
        onError?.(msg);
      }
    } catch (e: any) {
      if (retryCount > 0) {
        await uploadPost({
          posts: _posts,
          replyToPostId,
          retryCount: retryCount - 1,
          onSuccess,
          onError,
        });
      } else {
        onError?.(e?.response?.data?.msg || e?.message);
      }
    }
  };

  async function onSubmit() {
    setIsUploading(true);
    rest?.onSubmit?.();
    const toastRef = await Toast.show({
      duration: 0,
      content: editPost ? '正在编辑' : '正在发布...',
      icon: 'spin',
      hasMinWith: true,
    });

    await uploadPost({
      posts: [...editPosts],
      replyToPostId: replyPost?.id,
      onError(content) {
        setIsUploading(false);
        toastRef?.update?.({
          duration: 3000,
          hasMinWith: true,
          content,
          icon: undefined,
        });
      },
      onSuccess(postCode, post) {
        setIsUploading(false);
        onSuccess?.(post);
        toastRef?.update?.({
          duration: 3000,
          icon: 'done',
          action: '查看',
          onActionClick() {
            navigate(`/post/${postCode}`);
          },
          content: editPost ? '已编辑' : '已发布',
          hasMinWith: true,
        });
      },
    });
  }

  useCountDown({
    leftTime: editTimeGap > 0 && active ? editTimeGap : 0,
    onEnd() {
      setEditTimeUp(true);
      Modal.confirm({
        title: '编辑内容的 5 分钟时限已过',
        okText: '确定',
        okType: 'default',
        cancelText: null,
      });
    },
  });

  return (
    <>
      <PostEdit
        onFollowingChange={onFollowingChange}
        editing={!!editPost}
        replyPost={replyPost}
        user={user}
        editPosts={editPosts}
        onReplyAuthChange={replyAuth => {
          replyAuthRef.current = replyAuth;
        }}
        {...rest}
        canSubmit={!!canSubmit && !editTimeUp}
        onSubmit={onSubmit}
        isUploading={isUploading}
      />
    </>
  );
};

export default PostEditForm;
