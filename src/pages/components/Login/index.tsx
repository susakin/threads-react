import React, { useContext, useRef, useState } from 'react';
import styles from './index.module.less';
import { AuthContext } from '@context/AuthProvider';
import localforage from 'localforage';
import { useFetch } from '@hooks/useFetch';
import { login } from '@services/auth';
import { Button, Toast } from '@components/index';

const classNamePrefix = 'login';

type LoginData = {
  account?: string;
  password?: string;
};

type LoginProps = {
  onLoginSuccess?: () => void;
};

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [loginData, setLoginData] = useState<LoginData>({});
  const accountRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { dispatch } = useContext(AuthContext);

  const { run, loading } = useFetch(login, {
    manual: true,
    onSuccess(data: any) {
      localforage.setItem('token', data.token);
      dispatch({
        type: 'SET_USER',
        payload: {
          user: data?.user,
        },
      });
      onLoginSuccess?.();
    },
  });

  function onSubmit() {
    if (!loginData.account) {
      accountRef?.current?.focus();
      Toast.show('请输入你的账号');
      return;
    }
    if (!loginData.password) {
      passwordRef?.current?.focus();
      Toast.show('请输入你的密码');
      return;
    }
    run(loginData);
  }

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-title`]}>账户登录</div>
      <div className={styles[`${classNamePrefix}-item`]}>
        <input
          className={styles[`${classNamePrefix}-item-input`]}
          placeholder="账号"
          autoComplete="account"
          ref={accountRef}
          onChange={e => {
            setLoginData(v => ({ ...v, account: e.target.value }));
          }}
        />
      </div>
      <div className={styles[`${classNamePrefix}-item`]}>
        <input
          className={styles[`${classNamePrefix}-item-input`]}
          autoComplete="current-password"
          placeholder="密码"
          ref={passwordRef}
          type="password"
          onChange={e => {
            setLoginData(v => ({ ...v, password: e.target.value }));
          }}
        />
      </div>
      <div className={styles[`${classNamePrefix}-submit`]}>
        <Button
          type="primary"
          disabled={!loginData?.account || !loginData.password}
          disableClickWhenDisabled={false}
          className={styles[`${classNamePrefix}-submit-button`]}
          onClick={onSubmit}
          loading={loading}
          size="large"
        >
          登录
        </Button>
      </div>
    </div>
  );
};

export default Login;
