import React, { useContext, useState } from 'react';
import styles from './privacy.module.less';
import Switch from '@components/Switch';
import { Direction, Lock, Threads } from '@components/Icon';
import { AuthContext } from '@context/AuthProvider';
import Modal from '@components/Modal';
import { useFetch } from '@hooks/useFetch';
import { updateUser } from '@services/profile';
import Toast from '@components/Toast';
import SettingActions from './SettingActions';
import MentionModal from './MentionModal';

const classNamePrefix = 'privacy';

const Privacy: React.FC = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;

  const [mentionModalVisible, setMentionModalVisible] =
    useState<boolean>(false);

  const { run } = useFetch(updateUser, {
    manual: true,
    onSuccess(data, [params]) {
      Toast.show('设置已保存。');
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          user: {
            isPrivate: params.isPrivate,
          },
        },
      });
    },
  });
  const mentionAuthMap: Record<string, string> = {
    everyone: '所有人',
    noboby: '无人',
    following: '你关注的主页',
  };

  const actions = [
    {
      icon: <Lock viewBox="0 0 14 21" size={24} />,
      label: '私密主页',
      action: (
        <Switch
          size="small"
          checked={user?.isPrivate}
          onChange={isPrivate => {
            Modal.confirm({
              title: isPrivate ? '切换为私密主页？' : '切换为公开主页？',
              content: isPrivate
                ? '只有批准的粉丝才能查看你的内容并与之互动。'
                : 'Threads 内外的任何人都能看到你的内容并与之互动。',
              onOk() {
                run({ isPrivate });
              },
            });
          }}
        />
      ),
    },
    {
      icon: <Threads viewBox="0 0 192 192" size={24} />,
      label: '提及',
      action: (
        <div className={styles[`${classNamePrefix}-mention`]}>
          <div className={styles[`${classNamePrefix}-mention-text`]}>
            {mentionAuthMap[user?.mentionAuth as any]}
          </div>
          <Direction
            viewBox="0 0 24 24"
            size={16}
            style={{
              transform: 'rotate(180deg)',
              color: 'var(--barcelona-secondary-icon)',
            }}
          />
        </div>
      ),
      onClick() {
        setMentionModalVisible(true);
      },
    },
  ];

  return (
    <>
      <div className={styles[`${classNamePrefix}`]}>
        <SettingActions items={actions} />
      </div>
      <MentionModal
        visible={mentionModalVisible}
        onClose={() => {
          setMentionModalVisible(false);
        }}
      />
    </>
  );
};

export default Privacy;
