import React, { useContext } from 'react';
import AccessError from '../AccessError';
import PageContainer from '../PageContainer';
import { AuthContext } from '@context/AuthProvider';

type AuthProps = {
  children?: React.ReactNode;
};

const Auth: React.FC<AuthProps> = ({ children }) => {
  const { state } = useContext(AuthContext);
  if (!state.user) {
    return (
      <PageContainer>
        <AccessError />
      </PageContainer>
    );
  }

  return <>{children}</>;
};

export default Auth;
