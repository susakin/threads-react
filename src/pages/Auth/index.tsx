import React, { useContext, useLayoutEffect } from 'react';
import { Threads } from '@components/Icon';
import styles from './index.module.less';
import { AuthContext } from '@context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Login from '@pages/components/Login';

const classNamePrefix = `auth`;

const Auth: React.FC = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

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
        <Login
          onLoginSuccess={() => {
            navigate('/');
          }}
        />
      </div>
    </div>
  );
};

export default Auth;
