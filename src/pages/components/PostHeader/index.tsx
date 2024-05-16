import React, { useState } from 'react';
import Username from '../Username';
import cs from 'classnames';
import PostHeaderAction, { PostHeaderActionProps } from './PostHeaderAction';
import styles from './index.module.less';
import PostEditModal from '../PostEditModal';
import Time from '@components/Time';

const classNamePrefix = 'post-header';

export type PostHeaderProps = {
  className?: string;
  hasAction?: boolean;
} & Omit<PostHeaderActionProps, 'username'>;

const PostHeader: React.FC<PostHeaderProps> = ({
  className,
  hasAction = true,
  post,
  ...rest
}) => {
  const { user, code, createdAt } = post || {};
  const [postEditVisible, setPostEditVisible] = useState<boolean>(false);

  return (
    <>
      <div className={cs(styles[`${classNamePrefix}`], className)}>
        <div className={styles[`${classNamePrefix}-inner`]}>
          <div className={styles[`${classNamePrefix}-inner-name`]}>
            <Username
              user={user}
              className={styles[`${classNamePrefix}-inner-name-username`]}
              onFollowingChange={rest.onFollowingChange as any}
            />
            <Time
              time={createdAt}
              linkTo={`/post/${code}`}
              keepWeek={false}
              className={styles[`${classNamePrefix}-inner-name-time`]}
            />
          </div>
          <PostHeaderAction
            post={post}
            hasAction={hasAction}
            onEditClick={() => {
              setPostEditVisible(true);
            }}
            {...rest}
          />
        </div>
      </div>
      <PostEditModal
        visible={postEditVisible}
        onUpdate={rest?.onPostUpdate}
        editPost={post}
        onClose={() => {
          setPostEditVisible(false);
        }}
      />
    </>
  );
};

export default PostHeader;
