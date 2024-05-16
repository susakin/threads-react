import React, { useContext } from 'react';
import RadioGroup from '@components/RadioGroup';
import styles from './mentionAuth.module.less';
import { AuthContext, useCurrentUser } from '@context/AuthProvider';
import { useFetch } from '@hooks/useFetch';
import { updateUser } from '@services/profile';

const classNamePrefix = 'mention-auth';

type MentionAuthProps = {
  hiddenTitle?: boolean;
};

const MentionAuth: React.FC<MentionAuthProps> = ({ hiddenTitle }) => {
  const user = useCurrentUser();
  const { dispatch } = useContext(AuthContext);

  const { run } = useFetch(updateUser, {
    manual: true,
    onSuccess(data, [params]) {
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          user: {
            mentionAuth: params.mentionAuth,
          },
        },
      });
    },
  });

  return (
    <div className={styles[`${classNamePrefix}`]}>
      {!hiddenTitle && (
        <div className={styles[`${classNamePrefix}-title`]}>
          <div className={styles[`${classNamePrefix}-title-text`]}>提及</div>
        </div>
      )}
      <div className={styles[`${classNamePrefix}-hint`]}>
        <div className={styles[`${classNamePrefix}-hint-title`]}>
          允许以下用户 @ 提及你
        </div>
        <div className={styles[`${classNamePrefix}-hint-text`]}>
          选择谁能够在串文、回复或个性签名中 @
          提及你，以关联你的主页。当用户尝试 @ 提及你时，TA 会看到你不允许别人 @
          提及你。
        </div>
      </div>
      <RadioGroup
        defaultValue={user?.mentionAuth || 'everyone'}
        onChange={(mentionAuth: any) => {
          run({ mentionAuth });
        }}
        options={[
          {
            label: '所有人',
            value: 'everyone',
          },
          {
            value: 'following',
            label: '你关注的主页',
          },
          {
            value: 'noboby',
            label: '无人',
          },
        ]}
      />
    </div>
  );
};

export default MentionAuth;
