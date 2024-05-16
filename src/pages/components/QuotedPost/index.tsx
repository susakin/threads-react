import React from 'react';
import styles from './index.module.less';
import PostHeader from '../PostHeader';
import PostCaption, { PostCaptionProps } from '../PostCaption';
import PostSummary from '../PostSummary';
import { QuotationMark } from '@components/Icon';
import AvatarWithFollow from '../AvatarWithFollow';
import { Post } from '@typings/index';
import { useNavigate } from 'react-router-dom';
import cs from 'classnames';
import { OnFollowingChange } from '../FollowButton';
import UnavailableTomstone from '../CombinedPost/UnavailableTomstone';
import { getCaption } from '../PostCaption';

const classNamePrefix = 'quoted-post';

type QuotedPostProps = {
  post?: Post;
  isSummary?: boolean;
  hasReplyTo?: boolean;
  hasAvatarFollow?: boolean;
  style?: React.CSSProperties;
  canNavigate?: boolean;
} & Pick<PostCaptionProps, 'actionButtonInContainer'> &
  OnFollowingChange;

const QuotedPost: React.FC<QuotedPostProps> = ({
  post,
  isSummary,
  hasReplyTo,
  hasAvatarFollow = false,
  onFollowingChange,
  canNavigate = false,
  actionButtonInContainer,
  style,
}) => {
  const { user, code } = post || {};
  const navigate = useNavigate();
  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-can-navigate`]]: canNavigate,
      })}
      style={style}
      onClick={e => {
        e.stopPropagation();
        canNavigate && navigate(`/post/${code}`);
      }}
    >
      <div className={styles[`${classNamePrefix}-header`]}>
        <AvatarWithFollow
          size={22}
          user={user}
          hasFollow={hasAvatarFollow}
          onFollowingChange={onFollowingChange}
        />
        <PostHeader
          hasAction={false}
          post={post}
          onFollowingChange={onFollowingChange}
          className={styles[`${classNamePrefix}-header-full-name`]}
        />
      </div>
      <PostCaption
        hasAction={false}
        hasQuotedPost={false}
        hasReplyTo={hasReplyTo}
        post={post}
        isSummary={isSummary}
        actionButtonInContainer={actionButtonInContainer}
        className={styles[`${classNamePrefix}-caption`]}
      />
      {!isSummary && post?.quotedPostId && !post?.quotedPost && (
        <UnavailableTomstone />
      )}
      {!isSummary &&
        post?.quotedPost &&
        (post?.quotedPost.isUnavailable ? (
          <UnavailableTomstone />
        ) : (
          <div className={styles[`${classNamePrefix}-quoted`]}>
            <QuotationMark
              fill="none"
              height={8}
              width={13}
              viewBox="0 0 8 5"
              style={{ marginRight: 6 }}
            />
            {post.quotedPost.user?.username}：{getCaption(post.quotedPost)}
          </div>
        ))}
      {false && <PostSummary post={post} hasUserPreview={false} />}
    </div>
  );
};

export default QuotedPost;
