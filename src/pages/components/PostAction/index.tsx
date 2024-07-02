import React, { useMemo, useState } from 'react';
import {
  Quote,
  Heart,
  Comment,
  Repost,
  Share,
  Reposted,
  ShareTo,
} from '@components/Icon';
import {
  ActiveScaleButton,
  Popover,
  PopoverMenu,
  ScrollCountText,
  Toast,
} from '@components/index';
import styles from './index.module.less';
import { Post } from '@typings/index';
import { postLike, postUnlike, repost, unrepost } from '@services/post';
import { useFetch } from '@hooks/useFetch';
import PostEditModal from '../PostEditModal';
import { OnPostUpdate } from '../Post';
import { OnFollowingChange } from '../FollowButton';
import PrivateModifyModal from '../PrivateModifyModal';
import { useCurrentUser } from '@context/AuthProvider';
import cs from 'classnames';
import { isSupportTouch } from '@utils/index';
import { useCopy } from '../PostHeader/useCopy';
import PopupMenu from '@components/PopupMenu';

const classNamePrefix = 'post-action';

export type PostActionProps = {
  post?: Post;
  onReply?: (id: string, post: Post) => void;
} & OnPostUpdate &
  OnFollowingChange;

const PostAction: React.FC<PostActionProps> = ({
  post,
  onPostUpdate,
  onFollowingChange,
  onReply,
}) => {
  const viewBox = '0 0 18 18';
  const size = 20;
  const [replyPost, setReplyPost] = useState<Post | undefined>(post);
  const [quotedPost, setQuotedPost] = useState<Post | undefined>(post);
  const [postEditVisible, setPostEditVisible] = useState<boolean>(false);
  const [privateModifyVisible, setPrivateModifyVisible] =
    useState<boolean>(false);
  const user = useCurrentUser();
  const { item: copyItem } = useCopy({ postCode: post?.code });
  const [repostMenuVisible, setRepostMenuVisible] = useState<boolean>(false);
  const [shareMenuVisible, setShareMenuVisible] = useState<boolean>(false);

  const { run: _postLike, loading: postLikeLoading } = useFetch(postLike, {
    manual: true,
    onSuccess() {
      onPostUpdate?.(post?.id as string, {
        isLikedByViewer: true,
        likeCount: (post?.likeCount as number) + 1,
      });
    },
  });

  const { run: _postUnlike, loading: postUnlikeLoading } = useFetch(
    postUnlike,
    {
      manual: true,
      onSuccess() {
        onPostUpdate?.(post?.id as string, {
          isLikedByViewer: false,
          likeCount: (post?.likeCount as number) - 1,
        });
      },
    },
  );

  const { run: _repost, loading: repostLoading } = useFetch(repost, {
    manual: true,
    onSuccess() {
      onPostUpdate?.(post?.id as string, {
        isRepostedByViewer: true,
        repostCount: (post?.repostCount as number) + 1,
      });
      Toast.show('已转发');
    },
  });

  const { run: _unrepost, loading: urepostLoading } = useFetch(unrepost, {
    manual: true,
    onSuccess() {
      onPostUpdate?.(post?.id as string, {
        isRepostedByViewer: false,
        repostCount: (post?.repostCount as number) - 1,
      });
    },
  });

  function onLikeClick() {
    if (postLikeLoading || postUnlikeLoading) return;
    post?.isLikedByViewer
      ? _postUnlike(post?.id)
      : _postLike(post?.id as string);
  }

  function onRepostClick() {
    if (repostLoading || urepostLoading) return;
    post?.isRepostedByViewer
      ? _unrepost(post?.id)
      : _repost(post?.id as string);
  }

  function onComment() {
    if (!post?.canReply) {
      Toast.show(`${post?.user?.username}限制了这篇帖子的回复用户。`);
      return;
    }
    if (
      user?.isPrivate &&
      !post?.user?.friendshipStatus?.followedBy &&
      !post?.user?.friendshipStatus?.isOwn
    ) {
      setPrivateModifyVisible(true);
      return;
    }

    setReplyPost(post);
    setQuotedPost(undefined);
    setPostEditVisible(true);
  }

  function onQuote() {
    if (!post?.canReply) {
      Toast.show(`你无法引用这篇帖子。`);
      return;
    }
    setReplyPost(undefined);
    setQuotedPost(post);
    setPostEditVisible(true);
  }

  const props = {
    viewBox,
    size,
  };

  const shareItems: any[] = [copyItem];
  if (navigator?.share && isSupportTouch) {
    const url = `${window.location.origin}/post/${post?.code}`;
    shareItems.push({
      label: '分享到...',
      onClick() {
        navigator.share({
          url,
          title: 'threads',
          text: `@${post?.user?.username || ''} • ${post?.caption || '帖子'}`,
        });
      },
      icon: <ShareTo viewBox="0 0 19 19" size={20} fill="transparent" />,
    });
  }

  const repostItems = [
    {
      danger: post?.isRepostedByViewer,
      label: !post?.isRepostedByViewer ? '转发' : '移除',
      icon: <Repost {...props} fill="currentColor" />,
      onClick: onRepostClick,
    },
    {
      label: '引用',
      onClick: onQuote,
      disabled: !post?.canReply,
      icon: <Quote viewBox={'0 0 20 20'} size={size} fill="currentColor" />,
    },
  ];

  const actions = useMemo(() => {
    const hasLikeCount =
      (post?.likeCount || 0) > 0 && !post?.likeAndViewCountsDisabled;
    const hasRepostCount =
      (post?.repostCount || 0) > 0 && !post?.likeAndViewCountsDisabled;
    return [
      {
        icon: (
          <ActiveScaleButton
            className={cs({
              [styles[`${classNamePrefix}-liked`]]: post?.isLikedByViewer,
            })}
            contentClassName={styles[`${classNamePrefix}-button`]}
            size={36}
            style={{
              padding: hasLikeCount ? '0 12px' : '',
              marginLeft: hasLikeCount ? '-4px' : '',
            }}
            layerOffset={0}
            onClick={onLikeClick}
          >
            <Heart
              width={20}
              height={19}
              {...props}
              strokeWidth={2}
              stroke="currentColor"
              fill={post?.isLikedByViewer ? 'currentColor' : 'transparent'}
            />
            {hasLikeCount && (
              <ScrollCountText
                count={post?.likeCount}
                className={styles[`${classNamePrefix}-button-scroll-text`]}
              />
            )}
          </ActiveScaleButton>
        ),
      },
      {
        icon: (
          <ActiveScaleButton
            contentClassName={styles[`${classNamePrefix}-button`]}
            size={36}
            style={{
              padding: post?.commentCount ? '0 12px' : '',
            }}
            layerOffset={0}
            onClick={onComment}
          >
            <Comment
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              {...props}
            />
            {(post?.commentCount || 0) > 0 && (
              <ScrollCountText
                count={post?.commentCount}
                className={styles[`${classNamePrefix}-button-scroll-text`]}
              />
            )}
          </ActiveScaleButton>
        ),
      },
      {
        icon: (
          <Popover
            placement="bottom-start"
            hideWhenContentClick
            enabled={!isSupportTouch}
            content={<PopoverMenu items={[repostItems]} />}
          >
            <ActiveScaleButton
              contentClassName={styles[`${classNamePrefix}-button`]}
              size={36}
              style={{
                padding: hasRepostCount ? '0 12px' : '',
              }}
              onClick={() => {
                isSupportTouch && setRepostMenuVisible(true);
              }}
              layerOffset={0}
            >
              {!post?.isRepostedByViewer ? (
                <Repost {...props} fill="currentColor" />
              ) : (
                <Reposted {...props} fill="currentColor" />
              )}
              {hasRepostCount && (
                <ScrollCountText
                  count={post?.repostCount}
                  className={styles[`${classNamePrefix}-button-scroll-text`]}
                />
              )}
            </ActiveScaleButton>
          </Popover>
        ),
      },
      {
        icon: (
          <Popover
            placement="bottom-start"
            enabled={!isSupportTouch}
            hideWhenContentClick
            content={<PopoverMenu items={[shareItems]} />}
          >
            <ActiveScaleButton
              size={36}
              layerOffset={0}
              onClick={() => {
                isSupportTouch && setShareMenuVisible(true);
              }}
            >
              <Share
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                {...props}
              />
            </ActiveScaleButton>
          </Popover>
        ),
      },
    ];
  }, [post, user]);

  return (
    <>
      <div className={styles[`${classNamePrefix}`]}>
        {actions.map(({ icon }, index) => {
          return (
            <div
              className={styles[`${classNamePrefix}-item`]}
              key={index}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <PrivateModifyModal
        visible={privateModifyVisible}
        onClose={() => {
          setPrivateModifyVisible(false);
        }}
      />
      <PostEditModal
        onFollowingChange={onFollowingChange}
        title="回复"
        onSuccess={post => {
          onReply?.(replyPost?.id as string, post);
        }}
        replyPost={replyPost}
        quotedPost={quotedPost}
        visible={postEditVisible}
        onClose={() => {
          setPostEditVisible(false);
        }}
      />
      <PopupMenu
        items={[repostItems] as any}
        visible={repostMenuVisible}
        onClose={() => {
          setRepostMenuVisible(false);
        }}
      />

      <PopupMenu
        items={[shareItems] as any}
        visible={shareMenuVisible}
        onClose={() => {
          setShareMenuVisible(false);
        }}
      />
    </>
  );
};

export default PostAction;
