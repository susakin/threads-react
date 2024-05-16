import React from 'react';
import styles from './mutingUserTombstone.module.less';
import Button from '@components/Button';
import { unmute } from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { Post } from '@typings/index';
import { PostHeaderActionProps } from '../PostHeader/PostHeaderAction';
import Toast from '@components/Toast';

const classNamePrefix = 'muting-user-tombstone';

type HiddenPostTombstoneProps = {
  post: Post;
} & Pick<PostHeaderActionProps, 'onUserFriendshipStatusUpdate'>;

const HiddenPostTombstone: React.FC<HiddenPostTombstoneProps> = ({
  post,
  onUserFriendshipStatusUpdate,
}) => {
  const { run } = useFetch(unmute, {
    manual: true,
    onSuccess() {
      Toast.show('已重新看');
      onUserFriendshipStatusUpdate?.(post?.uid as string, { muting: false });
    },
  });

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-hint`]}>
        你已不看{post?.user?.username}的帖子。
      </div>
      <Button
        type="text"
        onClick={() => {
          run(post?.uid);
        }}
        className={styles[`${classNamePrefix}-button`]}
      >
        撤销
      </Button>
    </div>
  );
};

export default HiddenPostTombstone;
