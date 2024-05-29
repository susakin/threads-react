import React, { useContext, useState } from 'react';
import { Avatar, Button } from '@components/index';
import styles from './postComposer.module.less';
import { AuthContext } from '@context/AuthProvider';
import { PostEditModal } from '@pages/components';

const classNamePrefix = 'post-composer';

const PostComposer: React.FC = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <Avatar
          url={user?.profilePicUrl}
          size={36}
          linkTo={`/@${user?.username || ''}`}
        />
        <div
          className={styles[`${classNamePrefix}-inner-hint`]}
          onClick={() => {
            setVisible(true);
          }}
          role="button"
          tabIndex={0}
        >
          写写串文...
        </div>
        <Button
          className={styles[`${classNamePrefix}-inner-button`]}
          onClick={() => {
            setVisible(true);
          }}
        >
          发布
        </Button>
      </div>
      <hr className={styles[`${classNamePrefix}-split`]} />
      <PostEditModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        title={'发布串文'}
      />
    </div>
  );
};

export default PostComposer;
