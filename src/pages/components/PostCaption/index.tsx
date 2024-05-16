import React from 'react';
import { Media } from '@components/index';
import styles from './index.module.less';
import { Post } from '@typings/index';
import PostAction, { PostActionProps } from '../PostAction';
import LinkifyText from '../LinkifyText';
import cs from 'classnames';
import QuotedPost from '../QuotedPost';
import { OnPostUpdate } from '../Post';
import { OnFollowingChange } from '../FollowButton';
import UnavailableTomstone from '../CombinedPost/UnavailableTomstone';
import Poll from '../Poll';

const classNamePrefix = 'post-caption';

export type PostCaptionProps = {
  post?: Post;
  className?: string;
  textClassName?: string;
  isSummary?: boolean;
  hasAction?: boolean;
  actionButtonInContainer?: boolean;
  hasPlaceholder?: boolean;
  hasQuotedPost?: boolean;
  hasReplyTo?: boolean;
  quotePostActionButtonInContainer?: boolean;
  quotedPostcanNavigate?: boolean;
} & OnPostUpdate &
  OnFollowingChange &
  Pick<PostActionProps, 'onReply'>;

export function getCaption(post?: Post) {
  return post?.caption
    ? post.caption
    : `${
        post?.poll
          ? '投票'
          : (post?.medias?.length || 0) > 1
          ? '轮播'
          : post?.medias?.[0]?.type === 'image'
          ? '照片'
          : '视频'
      }`;
}

const PostCaption: React.FC<PostCaptionProps> = ({
  post,
  className,
  hasAction = true,
  hasQuotedPost = true,
  isSummary,
  hasReplyTo,
  actionButtonInContainer,
  hasPlaceholder,
  onPostUpdate,
  onFollowingChange,
  quotePostActionButtonInContainer,
  quotedPostcanNavigate,
  textClassName,
  onReply,
}) => {
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {hasReplyTo && post?.replyToUid && (
        <div className={styles[`${classNamePrefix}-reply`]}>
          正在回复@{post?.replyToUser?.username}
        </div>
      )}
      {isSummary ? (
        <div className={styles[`${classNamePrefix}-summary`]}>
          {getCaption(post)}
        </div>
      ) : (
        <div className={cs(styles[`${classNamePrefix}-text`], textClassName)}>
          <LinkifyText text={post?.caption} textEntities={post?.textEntities} />
        </div>
      )}
      {!isSummary && post?.medias?.length !== 0 && (
        <div className={styles[`${classNamePrefix}-media`]}>
          <Media
            hasPlaceholder={hasPlaceholder}
            medias={post?.medias}
            actionButtonInContainer={actionButtonInContainer}
          />
        </div>
      )}
      {!isSummary && post?.poll && (
        <Poll
          poll={post?.poll}
          onUpdate={poll => {
            onPostUpdate?.(post.id, { poll });
          }}
        />
      )}
      {!isSummary &&
        post?.quotedPostId &&
        hasQuotedPost &&
        !post?.quotedPost && <UnavailableTomstone />}
      {!isSummary &&
        post?.quotedPost &&
        hasQuotedPost &&
        (post?.quotedPost.isUnavailable ? (
          <UnavailableTomstone />
        ) : (
          <QuotedPost
            post={post?.quotedPost}
            onFollowingChange={onFollowingChange}
            canNavigate={quotedPostcanNavigate}
            actionButtonInContainer={quotePostActionButtonInContainer}
          />
        ))}
      {hasAction && (
        <PostAction
          post={post}
          onPostUpdate={onPostUpdate}
          onFollowingChange={onFollowingChange}
          onReply={onReply}
        />
      )}
    </div>
  );
};

export default PostCaption;
