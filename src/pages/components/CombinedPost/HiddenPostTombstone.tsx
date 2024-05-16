import React from 'react';
import styles from './hiddenPostTombstone.module.less';
import Button from '@components/Button';
import { revokeHidePost } from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { OnPostUpdate } from '../Post';
const classNamePrefix = 'hidden-post-tombstone';

type HiddenPostTombstoneProps = {
  postId: string;
} & OnPostUpdate;

const HiddenPostTombstone: React.FC<HiddenPostTombstoneProps> = ({
  onPostUpdate,
  postId,
}) => {
  const { run } = useFetch(revokeHidePost, {
    manual: true,
    onSuccess() {
      onPostUpdate?.(postId as string, { isHiddenByViewer: false });
    },
  });

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-hint`]}>这篇帖子已隐藏。</div>
      <Button
        type="text"
        onClick={() => {
          run(postId);
        }}
        className={styles[`${classNamePrefix}-button`]}
      >
        撤销
      </Button>
    </div>
  );
};

export default HiddenPostTombstone;
