import React, { useState } from 'react';
import Modal from '@components/Modal/Modal';
import styles from './index.module.less';
import { Post } from '@typings/index';
import RadioGroup from '@components/RadioGroup';
import Button from '@components/Button';
import { updateReplyAuth } from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { OnPostUpdate } from '../Post';

type ReplyAuthModalProps = {
  visible?: boolean;
  onClose?: () => void;
  post?: Post;
} & OnPostUpdate;

const classNamePrefix = 'reply-auth-modal';

const ReplyAuthModal: React.FC<ReplyAuthModalProps> = ({
  visible,
  onClose,
  post,
  onPostUpdate,
}) => {
  const [replyAuth, setReplyAuth] = useState<string | undefined>(
    post?.replyAuth,
  );
  const options = [
    {
      label: post?.user?.isPrivate ? '你的粉丝' : '任何人',
      value: 'everyone',
    },
    {
      label: '你关注的主页',
      value: 'followedBy',
    },
    {
      label: '仅限提及',
      value: 'mention',
    },
  ];

  const { run, loading } = useFetch(updateReplyAuth, {
    manual: true,
    onSuccess(res, [id, { replyAuth }]) {
      onPostUpdate?.(id, { replyAuth });
      onClose?.();
    },
  });

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      className={styles[`${classNamePrefix}`]}
    >
      <RadioGroup
        options={options}
        value={replyAuth}
        onChange={value => {
          setReplyAuth(value);
        }}
      />
      <Button
        type="primary"
        loading={loading}
        disabled={replyAuth === post?.replyAuth}
        onClick={() => {
          run(post?.id as string, { replyAuth });
        }}
        className={styles[`${classNamePrefix}-button`]}
      >
        更新
      </Button>
    </Modal>
  );
};

export default ReplyAuthModal;
