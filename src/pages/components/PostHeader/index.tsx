import React, { useState } from 'react';
import Username from '../Username';
import cs from 'classnames';
import PostHeaderAction, { PostHeaderActionProps } from './PostHeaderAction';
import styles from './index.module.less';
import PostEditModal from '../PostEditModal';
import Time from '@components/Time';
import { TextEntity } from '@typings/index';

const classNamePrefix = 'post-header';

export type PostHeaderProps = {
  className?: string;
  onPostSuccess?: () => void;
} & Omit<PostHeaderActionProps, 'username' | 'onEditClick' | 'onTagClick'>;

const PostHeader: React.FC<PostHeaderProps> = ({
  className,
  post,
  onPostSuccess,
  ...rest
}) => {
  const { user, code, createdAt } = post || {};
  const [postEditVisible, setPostEditVisible] = useState<boolean>(false);
  const [textEntity, setTextEntity] = useState<TextEntity>();
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
            onEditClick={() => {
              setPostEditVisible(true);
            }}
            onTagClick={() => {
              setPostEditVisible(true);
              setTextEntity(
                post?.textEntities?.find(item => item.type === 'tag'),
              );
            }}
            {...rest}
          />
        </div>
      </div>
      <PostEditModal
        visible={postEditVisible}
        onUpdate={rest?.onPostUpdate}
        editPost={textEntity ? undefined : post}
        textEntity={textEntity}
        onSuccess={_post => {
          _post?.id !== post?.id && onPostSuccess?.();
        }}
        onClose={() => {
          setPostEditVisible(false);
          setTextEntity(undefined);
        }}
      />
    </>
  );
};

export default PostHeader;
