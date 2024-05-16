import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  PopoverMenuItem,
  Popover,
  PopoverMenu,
} from '@components/index';
import PostEditItem from './PostEditItem';
import Post from '../Post';
import styles from './postEdit.module.less';
import { Media, Post as PostItem, ReplyAuth, User } from '@typings/index';
import { EditPost } from '.';
import cs from 'classnames';
import { OnFollowingChange } from '../FollowButton';

const classNamePrefix = 'post-edit';

type PostEditProps = {
  user?: User;
  replyPost?: PostItem;
  editPosts?: EditPost[];
  onAddPost?: () => void;
  onDeletePost?: (id: string) => void;
  onUpdatePost?: (eidtPost: EditPost, id: string) => void;
  onAccessibilityClick?: (id: string, media: Media) => void;
  canSubmit?: boolean;
  onSubmit?: () => void;
  isUploading?: boolean;
  editing?: boolean;
  onReplyAuthChange?: (replyAuth: ReplyAuth) => void;
} & OnFollowingChange;

const PostEdit: React.FC<PostEditProps> = ({
  user,
  editPosts,
  onAddPost,
  onDeletePost,
  onUpdatePost,
  canSubmit,
  onSubmit,
  isUploading,
  replyPost,
  editing,
  onFollowingChange,
  onReplyAuthChange,
  onAccessibilityClick,
}) => {
  const maxLength = 500;
  const hintLength = 50;
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [length, setLength] = useState<number>(0);
  const captionMapRef = useRef<Record<any, string>>({});
  const postLengthRef = useRef<number>(editPosts?.length || 0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const length = editPosts?.length || 0;
    if (length > postLengthRef.current || postLengthRef.current === 1) {
      setTimeout(() => {
        const container = containerRef?.current;
        containerRef?.current?.scrollTo({
          top: (container?.scrollHeight || 0) - (container?.clientHeight || 0),
          behavior: 'smooth',
        });
      }, 50);
    }
    postLengthRef.current = length;
  }, [editPosts?.length]);

  function updateHint(caption: string = '') {
    setLength(maxLength - caption?.length);
  }

  const [replyAuth, setReplyAuth] = useState<ReplyAuth>('everyone');

  const menus: PopoverMenuItem[] = [
    {
      label: user?.isPrivate ? '你的粉丝' : '任何人',
      key: 'everyone',
    },
    {
      label: '你关注的主页',
      key: 'followedBy',
    },
    {
      label: '仅限提及',
      key: 'mention',
    },
  ];

  const hasPoll = !!editPosts?.[0]?.poll;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-inner`]} ref={containerRef}>
        {replyPost && (
          <Post
            post={replyPost}
            hasAvatarFollow={false}
            className={styles[`${classNamePrefix}-inner-post`]}
            hasCaptionAction={false}
            hasHeaderAction={false}
            hasSummary={false}
            actionButtonInContainer={true}
            canNavigate={false}
            lineType={'line'}
            postLineInnerClassName={
              styles[`${classNamePrefix}-inner-post-line`]
            }
            postLineBarClassName={
              styles[`${classNamePrefix}-inner-post-line-bar`]
            }
            onFollowingChange={onFollowingChange}
            quotePostActionButtonInContainer={true}
          />
        )}
        {editPosts?.map((item, index) => {
          return (
            <PostEditItem
              onlyOne={editPosts?.length === 1}
              key={item.id}
              post={item}
              onAccessibilityClick={media => {
                onAccessibilityClick?.(item.id as string, media);
              }}
              placeholder={
                index !== 0
                  ? '详细说说...'
                  : editing
                  ? '编辑串文...'
                  : replyPost
                  ? `回复${replyPost?.user?.username}...`
                  : editPosts?.[0]?.quotedPost
                  ? '说说想法...'
                  : '写写串文...'
              }
              hasDelete={index !== 0}
              hasAdd={index === editPosts?.length - 1}
              user={user}
              onAdd={onAddPost}
              onFocus={() => {
                setIsFocus(true);
                updateHint(captionMapRef.current[item.id as string]);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
              onDelete={() => {
                onDeletePost?.(item?.id as string);
              }}
              onUpdate={editPost => {
                if (captionMapRef.current) {
                  captionMapRef.current[item.id as string] =
                    editPost?.caption as string;
                }
                updateHint(editPost?.caption as string);
                onUpdatePost?.(editPost, item?.id as string);
              }}
              onFollowingChange={onFollowingChange}
              className={styles[`${classNamePrefix}-inner-item`]}
            />
          );
        })}
      </div>
      <div className={styles[`${classNamePrefix}-footer`]}>
        <Button
          type="primary"
          disabled={!canSubmit || length < 0}
          onClick={onSubmit}
          loading={isUploading}
          disabledType="gray"
          style={{ borderRadius: '36px' }}
        >
          {editing ? '确定' : '发布'}
        </Button>
        {isFocus && length !== 0 && length <= hintLength && (
          <div
            className={cs(styles[`${classNamePrefix}-footer-hint`], {
              [styles[`${classNamePrefix}-footer-hint-error`]]: length < 0,
            })}
          >
            {length}
          </div>
        )}
        <Popover
          placement="bottom-start"
          hideWhenContentClick
          content={
            <PopoverMenu
              items={menus}
              onClick={item => {
                const key = item.key as any;
                setReplyAuth(key);
                onReplyAuthChange?.(key);
              }}
            />
          }
        >
          <Button
            type="text"
            className={styles[`${classNamePrefix}-footer-reply-auth`]}
          >
            {replyAuth === 'mention'
              ? '你提及的主页'
              : menus.find(item => item.key === replyAuth)?.label}
            {replyAuth === 'everyone' ? '都' : ''}可以回复
            {hasPoll ? '、' : '和'}引用
            {hasPoll ? '和投票' : ''}
          </Button>
        </Popover>
      </div>
    </div>
  );
};

export default PostEdit;
