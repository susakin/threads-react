import React, { useState } from 'react';
import SettingActions from './SettingActions';
import styles from './account.module.less';
import { Direction } from '@components/Icon';
import DeleteModal from './DeleteModal';

const classNamePrefix = 'account';

const Account: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const actions = [
    {
      label: '删除主页',
      action: (
        <Direction
          viewBox="0 0 24 24"
          size={16}
          style={{
            transform: 'rotate(180deg)',
            color: 'var(--barcelona-secondary-icon)',
          }}
        />
      ),
      onClick() {
        setVisible(true);
      },
    },
  ];
  return (
    <>
      <div className={styles[`${classNamePrefix}`]}>
        <SettingActions items={actions} />
      </div>
      <DeleteModal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default Account;
