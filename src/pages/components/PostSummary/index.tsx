import React, { useState } from 'react';
import cs from 'classnames';
import styles from './index.module.less';
import UserPreview from '../UserPreview';
import { Link } from 'react-router-dom';
import { ScrollCountText } from '@components/index';
import PostActivityModal from '../PostActivityModal';
import { Post } from '@typings/index';

const classNamePrefix = 'post-summary';

export type PostSummaryProps = {
  post?: Post;
  indent?: boolean;
  hasUserPreview?: boolean;
  hasCommentCount?: boolean;
  className?: string;
  onCommentCountClick?: (id: string) => void;
};

const PostSummary: React.FC<PostSummaryProps> = ({
  post,
  indent,
  hasUserPreview = true,
  hasCommentCount = true,
  className,
  onCommentCountClick,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    replyUsersProfilePicUrl,
    commentCount = 0,
    likeCount = 0,
    code,
    id,
    likeAndViewCountsDisabled,
  } = post || {};

  if ((!commentCount || !hasCommentCount) && !likeCount) return null;

  return (
    <div
      className={cs(
        styles[`${classNamePrefix}`],
        {
          [styles[`${classNamePrefix}-indent`]]: indent,
          [styles[`${classNamePrefix}-none-indent`]]: !indent,
        },
        className,
      )}
    >
      {hasCommentCount && (
        <>
          {replyUsersProfilePicUrl?.length !== 0 && hasUserPreview && (
            <UserPreview
              urls={
                indent
                  ? replyUsersProfilePicUrl?.slice(0, 2)
                  : replyUsersProfilePicUrl
              }
              hasMarginRightWhenOne={false}
              className={styles[`${classNamePrefix}-avatar`]}
            />
          )}
          {commentCount > 0 && (
            <Link
              to={`/post/${code}`}
              className={styles[`${classNamePrefix}-comment`]}
              onClick={e => {
                e.stopPropagation();
                onCommentCountClick?.(id as string);
              }}
            >
              <ScrollCountText count={commentCount} />
              条回复
            </Link>
          )}
          {commentCount > 0 && likeCount > 0 && (
            <span className={styles[`${classNamePrefix}-split`]}>
              &nbsp;·&nbsp;
            </span>
          )}
        </>
      )}
      {likeCount > 0 &&
        (likeAndViewCountsDisabled ? (
          <span
            onClick={e => {
              e.stopPropagation();
              setVisible(true);
            }}
            className={styles[`${classNamePrefix}-like`]}
          >
            查看动态
          </span>
        ) : (
          <span className={styles[`${classNamePrefix}-like`]}>
            <ScrollCountText
              onClick={e => {
                e.stopPropagation();
                setVisible(true);
              }}
              count={likeCount}
            />
            次赞
          </span>
        ))}
      <PostActivityModal
        post={post}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default PostSummary;
