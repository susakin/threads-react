import React, { useState, useRef, useContext, useLayoutEffect } from 'react';
import { Threads } from '@components/Icon';
import { Button, Toast } from '@components/index';
import styles from './index.module.less';
import { useFetch } from '@hooks/useFetch';
import { login } from '@services/auth';
import { AuthContext } from '@context/AuthProvider';
import localforage from 'localforage';
import { useNavigate } from 'react-router-dom';

const classNamePrefix = `auth`;

type LoginData = {
  account?: string;
  password?: string;
};

const Auth: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({});
  const accountRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

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
      navigate('/');
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

  useLayoutEffect(() => {
    if (state.user) {
      navigate('/');
    }
  }, [state.user]);

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-inner`]}>
        <div className={styles[`${classNamePrefix}-inner-logo`]}>
          <Threads
            fill="var(--barcelona-primary-icon)"
            size="100%"
            viewBox="0 0 192 192"
          />
        </div>
        <div className={styles[`${classNamePrefix}-inner-form`]}>
          <div className={styles[`${classNamePrefix}-inner-form-title`]}>
            账户登录
          </div>
          <div className={styles[`${classNamePrefix}-inner-form-item`]}>
            <input
              className={styles[`${classNamePrefix}-inner-form-item-input`]}
              placeholder="账号"
              autoComplete="account"
              ref={accountRef}
              onChange={e => {
                setLoginData(v => ({ ...v, account: e.target.value }));
              }}
            />
          </div>
          <div className={styles[`${classNamePrefix}-inner-form-item`]}>
            <input
              className={styles[`${classNamePrefix}-inner-form-item-input`]}
              autoComplete="current-password"
              placeholder="密码"
              ref={passwordRef}
              type="password"
              onChange={e => {
                setLoginData(v => ({ ...v, password: e.target.value }));
              }}
            />
          </div>
          <div className={styles[`${classNamePrefix}-inner-form-submit`]}>
            <Button
              type="primary"
              disabled={!loginData?.account || !loginData.password}
              disableClickWhenDisabled={false}
              className={styles[`${classNamePrefix}-inner-form-submit-button`]}
              onClick={onSubmit}
              loading={loading}
              size="large"
            >
              登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
