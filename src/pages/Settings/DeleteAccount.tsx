import React, { useContext } from 'react';
import styles from './deleteAccount.module.less';
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { AuthContext } from '@context/AuthProvider';
import cs from 'classnames';

const classNamePrefix = 'delete-account';

type DeleteAccountProps = {
  hiddenTitle?: boolean;
  className?: string;
  onConfirm?: () => void;
};

const DeleteAccount: React.FC<DeleteAccountProps> = ({
  hiddenTitle = false,
  className,
  onConfirm,
}) => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {!hiddenTitle && (
        <div className={styles[`${classNamePrefix}-title`]}>删除主页</div>
      )}
      <div className={styles[`${classNamePrefix}-user`]}>
        <div className={styles[`${classNamePrefix}-user-avatar`]}>
          <Avatar size={44} url={user?.profilePicUrl} />
        </div>
        <div className={styles[`${classNamePrefix}-user-profile`]}>
          <div className={styles[`${classNamePrefix}-user-profile-username`]}>
            @{user?.username}
          </div>
          <div className={styles[`${classNamePrefix}-user-profile-full-name`]}>
            {user?.fullName}
          </div>
        </div>
      </div>
      <div className={styles[`${classNamePrefix}-hint`]}>
        <div className={styles[`${classNamePrefix}-hint-item`]}>
          <div className={styles[`${classNamePrefix}-hint-item-title`]}>
            删除主页是永久性操作
          </div>
          <div className={styles[`${classNamePrefix}-hint-item-text`]}>
            你的 Threads 主页、内容、赞和粉丝将隐藏，账号会被立即删除。
          </div>
        </div>
      </div>
      <div className={styles[`${classNamePrefix}-action`]}>
        <Button
          className={styles[`${classNamePrefix}-action-button`]}
          onClick={onConfirm}
        >
          删除主页
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccount;
