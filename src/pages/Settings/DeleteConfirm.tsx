import React, { useContext, useState } from 'react';
import styles from './deleteConfirm.module.less';
import cs from 'classnames';
import { Arrow } from '@components/Icon';
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { useFetch } from '@hooks/useFetch';
import { deleteUser } from '@services/profile';
import Modal from '@components/Modal';
import { AuthContext } from '@context/AuthProvider';

const classNamePrefix = 'delete-confirm';

type DeleteConfirmProps = {
  className?: string;
  hiddenTitle?: boolean;
  onBack?: () => void;
};

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({
  className,
  hiddenTitle,
  onBack,
}) => {
  const [password, setPassword] = useState<string>('');
  const { state } = useContext(AuthContext);
  const { user } = state;
  const { run, loading } = useFetch(deleteUser, {
    manual: true,
    ignoreErrorMsg: true,
    onSuccess() {
      window.location.reload();
    },
    onError() {
      setPassword('');
      Modal.confirm({
        title: '密码有误',
        content: '你输入的密码有误，请重新输入。',
        cancelText: null,
        okText: '重试',
      });
    },
  });

  const disabled = password?.length === 0;

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      {!hiddenTitle && (
        <div className={styles[`${classNamePrefix}-title`]}>
          <div
            className={styles[`${classNamePrefix}-title-action`]}
            onClick={onBack}
          >
            <Arrow viewBox="0 0 24 24" size={20} />
          </div>
          <div className={styles[`${classNamePrefix}-title-text`]}>
            登录以永久删除你的 Threads 主页
          </div>
        </div>
      )}
      <div className={styles[`${classNamePrefix}-form`]}>
        <div className={styles[`${classNamePrefix}-form-user`]}>
          <div className={styles[`${classNamePrefix}-form-user-profile`]}>
            <div
              className={styles[`${classNamePrefix}-form-user-profile-label`]}
            >
              账号
            </div>
            <div
              className={
                styles[`${classNamePrefix}-form-user-profile-username`]
              }
            >
              @{user?.username}
            </div>
          </div>
          <div className={styles[`${classNamePrefix}-form-user-avatar`]}>
            <Avatar size={44} url={user?.profilePicUrl} />
          </div>
        </div>
        <div className={styles[`${classNamePrefix}-form-user-password`]}>
          <div
            className={styles[`${classNamePrefix}-form-user-password-label`]}
          >
            密码
          </div>
          <input
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="请输入密码"
            className={styles[`${classNamePrefix}-form-user-password-input`]}
          />
        </div>
      </div>
      <div className={styles[`${classNamePrefix}-submit`]}>
        <Button
          loading={loading}
          className={cs(styles[`${classNamePrefix}-submit-button`], {
            [styles[`${classNamePrefix}-submit-button-disabled`]]: disabled,
          })}
          disabled={disabled}
          onClick={() => {
            run(password);
          }}
        >
          删除 Threads 主页
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirm;
