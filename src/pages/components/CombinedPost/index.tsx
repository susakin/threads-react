import React from 'react';
import styles from './index.module.less';
import Post from '../Post';
import cs from 'classnames';
import { CombinedPost as CombinedPostItem } from '@typings/index';
import HiddenPostTombstone from './HiddenPostTombstone';
import { PostHeaderActionProps } from '../PostHeader/PostHeaderAction';
import UnavailableTomstone from './UnavailableTomstone';
import { Pin, Repost, Star } from '@components/Icon';
import MutingUserTombstone from './MutingUserTombstone';
import { PostSummaryProps } from '../PostSummary';
import { PostActionProps } from '../PostAction';
import Sign from './Sign';
import Username from '../Username';
import Time from '@components/Time';
import { useNavigate } from 'react-router-dom';
import { PostHeaderProps } from '../PostHeader';

const classNamePrefix = 'combined-post';

export type CombinedPostProps = {
  combinedPost?: CombinedPostItem;
  hasBorderTop?: boolean;
  hasPaddingTop?: boolean;
  lastChildLineType?: 'transparent' | 'none';
  lastChildHasSummaryUserPreview?: boolean;
  indent?: boolean;
  indentWhenTransparentLine?: boolean;
  hasReplyTo?: boolean;
  ignoreUnavailablePost?: boolean;
  ignoreMutingUser?: boolean;
  replyToPostId?: string;
  hasPinSign?: boolean;
  hasFirstSign?: boolean;
  hasRepostSign?: boolean;
} & PostHeaderActionProps &
  Pick<PostSummaryProps, 'onCommentCountClick'> &
  Pick<PostActionProps, 'onReply'> &
  Pick<PostHeaderProps, 'onPostSuccess' | 'onUsernameClick'>;

const CombinedPost: React.FC<CombinedPostProps> = ({
  combinedPost,
  hasBorderTop = true,
  hasPaddingTop = true,
  lastChildLineType,
  //lastChildHasSummaryUserPreview = true,
  indent,
  indentWhenTransparentLine,
  hasReplyTo,
  ignoreUnavailablePost,
  replyToPostId,
  hasPin,
  ignoreMutingUser,
  hasPinSign,
  hasFirstSign,
  hasRepostSign,
  ...rest
}) => {
  const navigate = useNavigate();
  const mutilPosts = (combinedPost?.posts?.length || 0) > 1;
  return (
    <div
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-has-border-top`]]: hasBorderTop,
        [styles[`${classNamePrefix}-has-padding-top`]]: hasPaddingTop,
      })}
    >
      {combinedPost?.posts?.map((post, index) => {
        const length = combinedPost?.posts?.length || 0;
        const isLast = index === length - 1;
        const commentCount = post?.commentCount || 0;

        let lineType: string = 'transparent';
        // if (commentCount > 1) {
        //   if (!isLast) {
        //     lineType = 'squiggle';
        //   } else {
        //     lineType = 'line';
        //   }
        // } else if (commentCount == 1) {
        //   lineType = 'line';
        // }
        if (mutilPosts && !isLast) {
          lineType = 'line';
        }

        const _indent =
          indent || (lineType === 'transparent' && indentWhenTransparentLine);

        if (post?.isUnavailable || !post) {
          if (ignoreUnavailablePost) {
            return null;
          }
          return <UnavailableTomstone key={post?.id} />;
        }

        if (post.user?.friendshipStatus?.muting && !ignoreMutingUser) {
          return (
            <MutingUserTombstone
              post={post}
              key={post?.id}
              onUserFriendshipStatusUpdate={rest.onUserFriendshipStatusUpdate}
            />
          );
        }

        if (post.isHiddenByViewer) {
          return (
            <HiddenPostTombstone
              key={post?.id}
              postId={post?.id}
              onPostUpdate={rest.onPostUpdate}
            />
          );
        }
        const pinToProfile = rest.pinToWhere === 'profile';
        const _hasPin =
          hasPin &&
          (pinToProfile
            ? post.user?.friendshipStatus?.isOwn && !post.replyToPostId
            : replyToPostId === post?.replyToPostId);

        const _hasPinSign =
          hasPinSign &&
          (pinToProfile ? post.isPinnedToProfile : post.isPinnedToComment);

        const _hasFirstSign =
          hasFirstSign && !post.isPinnedToProfile && post.isFirst;

        const _hasRepostSign =
          hasRepostSign && typeof post?.repostedBy !== 'undefined';
        return (
          <>
            {_hasPinSign && (
              <Sign
                text="已置顶"
                icon={<Pin viewBox="0 0 20 20" size={16} />}
              />
            )}
            {_hasFirstSign && (
              <Sign
                text="首条推文"
                icon={<Star viewBox="0 0 24 24" size={16} />}
              />
            )}
            {_hasRepostSign && (
              <Sign
                text={
                  <span
                    className={styles[`${classNamePrefix}-repost`]}
                    onClick={() => {
                      navigate(`/@${post?.repostedBy?.user?.username}`);
                    }}
                  >
                    <Username
                      user={post?.repostedBy?.user}
                      className={styles[`${classNamePrefix}-repost-username`]}
                      hasVerified={false}
                    />
                    <Time time={post?.repostedBy?.createdAt} />
                    前转发了
                  </span>
                }
                icon={<Repost viewBox="0 0 18 18" size={16} />}
              />
            )}
            <Post
              hasReplyTo={(!isLast || length === 1) && hasReplyTo}
              hasPin={_hasPin}
              key={post?.id}
              lineType={
                isLast && lastChildLineType
                  ? lastChildLineType
                  : (lineType as any)
              }
              post={post}
              indent={
                isLast
                  ? lastChildLineType === 'none'
                    ? false
                    : commentCount
                    ? false
                    : _indent
                  : _indent
              }
              // hasSummaryUserPreview={
              //   isLast ? lastChildHasSummaryUserPreview : true
              // }
              // hasCommentCount={
              //   commentCount !== 1 || (commentCount === 1 && isLast)
              // }
              className={cs(styles[`${classNamePrefix}-item`], {
                [styles[`${classNamePrefix}-item-not-first`]]: !!index,
                [styles[`${classNamePrefix}-item-no-line`]]:
                  mutilPosts && isLast && lastChildLineType === 'none',
              })}
              {...rest}
            />
          </>
        );
      })}
    </div>
  );
};

export default CombinedPost;
