import React, { useContext, useState } from 'react';
import Avatar from '@components/Avatar';
import styles from './privateModify.module.less';
import { AuthContext } from '@context/AuthProvider';
import RadioGroup from '@components/RadioGroup';
import Button from '@components/Button';
import { useFetch } from '@hooks/useFetch';
import { updateUser } from '@services/profile';

const classNamePrefix = 'private-modify';

type PrivateModifyProps = {
  onModified?: () => void;
};

const PrivateModify: React.FC<PrivateModifyProps> = ({ onModified }) => {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const [isPrivate, setIsPrivate] = useState<boolean>(!!user?.isPrivate);

  const { run, loading } = useFetch(updateUser, {
    manual: true,
    onSuccess(data, [params]) {
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          user: {
            isPrivate: params.isPrivate,
          },
        },
      });
      onModified?.();
    },
  });

  const hasModified = isPrivate !== user?.isPrivate;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-header`]}>
        <div className={styles[`${classNamePrefix}-header-avatar`]}>
          <Avatar url={user?.profilePicUrl} size={64} />
        </div>
        <div className={styles[`${classNamePrefix}-header-title`]}>
          私密主页只能回复自己的粉丝
        </div>
        <div className={styles[`${classNamePrefix}-header-subtitle`]}>
          切换为“公开”即可回复任何用户。
        </div>
      </div>
      <div className={styles[`${classNamePrefix}-radio`]}>
        <RadioGroup
          defaultValue={`${user?.isPrivate}`}
          onChange={v => {
            setIsPrivate(v === 'true');
          }}
          options={[
            {
              label: '公开主页',
              value: 'false',
            },
            {
              label: '私密主页',
              value: 'true',
            },
          ]}
        />
      </div>
      <div>
        <Button
          type={!hasModified ? 'default' : 'primary'}
          loading={loading}
          disabled={!hasModified}
          className={styles[`${classNamePrefix}-button`]}
          size={'large'}
          onClick={() => {
            run({ isPrivate: false });
          }}
        >
          {!hasModified ? '取消' : '完成'}
        </Button>
      </div>
    </div>
  );
};

export default PrivateModify;
