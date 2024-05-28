import React from 'react';
import AvatarWithFollow from '../AvatarWithFollow';
import PostHeader, { PostHeaderProps } from '../PostHeader';
import PostCaption, { PostCaptionProps } from '../PostCaption';
import PostLine from '../PostLine/PostLine';
import PostSummary, { PostSummaryProps } from '../PostSummary';
import cs from 'classnames';
import styles from './index.module.less';
import { Post as PostItem } from '@typings/index';
import { useNavigate, useLocation } from 'react-router-dom';

const classNamePrefix = 'post';

export type OnPostUpdate = {
  onPostUpdate?: (
    id: string,
    updateFiled: Partial<Omit<PostItem, 'id'>>,
  ) => void;
};

type PostProps = {
  className?: string;
  post?: PostItem;
  hasHeaderAction?: boolean;
  hasCaptionAction?: boolean;
  hasSummary?: boolean;
  postLinePlaceholderHeight?: number;
  hasReplyTo?: boolean;
  hasCommentCount?: boolean;
  lineType: 'none' | 'squiggle' | 'line' | 'transparent';
  hasAvatarFollow?: boolean;
  hasSummaryUserPreview?: boolean;
  postLineInnerClassName?: string;
  postLineBarClassName?: string;
  indent?: boolean;
  canNavigate?: boolean;
} & OnPostUpdate &
  Pick<
    PostCaptionProps,
    'quotePostActionButtonInContainer' | 'actionButtonInContainer' | 'onReply'
  > &
  Pick<
    PostHeaderProps,
    | 'onFollowingChange'
    | 'hasPin'
    | 'hasPined'
    | 'pinToWhere'
    | 'onPostSuccess'
    | 'onUsernameClick'
  > &
  Pick<PostSummaryProps, 'onCommentCountClick'>;

const Post: React.FC<PostProps> = ({
  className,
  post,
  hasHeaderAction = true,
  hasCaptionAction = true,
  hasSummary = true,
  actionButtonInContainer,
  //postLinePlaceholderHeight,
  hasAvatarFollow = true,
  hasCommentCount = true,
  canNavigate = true,
  hasSummaryUserPreview,
  indent,
  lineType,
  hasReplyTo,
  quotePostActionButtonInContainer,
  onCommentCountClick,
  onReply,
  postLineInnerClassName,
  postLineBarClassName,
  ...rest
}) => {
  const { user, code, caption, medias } = post || {};
  const hasLine = lineType !== 'none';
  const isSquiggleLine = lineType === 'squiggle';
  const _indent = indent || isSquiggleLine;
  const noneTransparentLine = lineType === 'line' || isSquiggleLine;
  const noneCaption = !caption && (medias?.length || 0) > 1;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = `/post/${code}`;
  const _canNavigate = path !== pathname && canNavigate;

  return (
    <div
      className={cs(styles[`${classNamePrefix}`], className, {
        [styles[`${classNamePrefix}-none-line`]]: !hasLine,
        [styles[`${classNamePrefix}-has-line`]]: hasLine,
        [styles[`${classNamePrefix}-can-navigate`]]: _canNavigate,
        [styles[`${classNamePrefix}-none-caption`]]: noneCaption,
        [styles[`${classNamePrefix}-none-caption-has-summary`]]:
          noneCaption && hasSummary && !_indent,
      })}
      onClick={() => {
        _canNavigate && navigate(path);
      }}
    >
      <AvatarWithFollow
        user={user}
        size={36}
        hasFollow={hasAvatarFollow}
        className={styles[`${classNamePrefix}-avatar`]}
        onFollowingChange={rest.onFollowingChange as any}
      />
      <PostHeader
        className={styles[`${classNamePrefix}-header`]}
        hasAction={hasHeaderAction}
        post={post}
        {...rest}
      />
      {/* {noneTransparentLine && (
        <PostLine
          lineType={lineType as any}
          indent={_indent}
          placeholderHeight={postLinePlaceholderHeight}
          className={styles[`${classNamePrefix}-line`]}
        />
      )} */}
      {noneTransparentLine && (
        <PostLine
          innerClassName={postLineInnerClassName}
          barClassName={postLineBarClassName}
        />
      )}
      <PostCaption
        className={styles[`${classNamePrefix}-caption`]}
        post={post}
        hasAction={hasCaptionAction}
        actionButtonInContainer={actionButtonInContainer}
        onPostUpdate={rest?.onPostUpdate}
        hasReplyTo={hasReplyTo}
        onFollowingChange={rest?.onFollowingChange}
        quotedPostcanNavigate={canNavigate}
        hasPlaceholder={hasLine}
        onReply={onReply}
        quotePostActionButtonInContainer={quotePostActionButtonInContainer}
      />
      {false && (
        <PostSummary
          post={post}
          indent={_indent}
          hasCommentCount={hasCommentCount}
          hasUserPreview={hasSummaryUserPreview}
          className={styles[`${classNamePrefix}-summary`]}
          onCommentCountClick={onCommentCountClick}
        />
      )}
    </div>
  );
};

export default Post;
