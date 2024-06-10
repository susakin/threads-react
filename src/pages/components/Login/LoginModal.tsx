import React from 'react';
import Modal from '@components/Modal/Modal';
import styles from './loginModal.module.less';
import Login from '.';
import renderToContainer from '@utils/renderToContainer';
import { useNavigate } from 'react-router-dom';
import { isSupportTouch } from '@utils/index';

type LoginModalProps = {
  visible?: boolean;
  onClose?: () => void;
};

const classNamePrefix = 'login-modal';

const LoginModal: React.FC<LoginModalProps> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className={styles[`${classNamePrefix}`]}>
        <Login
          onLoginSuccess={() => {
            location.reload();
          }}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;

type LoginBeforeNavigateProps = {
  visible?: boolean;
  onClose?: () => void;
};

const LoginBeforeNavigate: React.FC<LoginBeforeNavigateProps> = ({
  visible,
  onClose,
}) => {
  return <LoginModal visible={visible} onClose={onClose} />;
};

export const useLogin = () => {
  const navigate = useNavigate();

  return {
    showLogin() {
      if (isSupportTouch) {
        navigate('/auth');
        return null;
      }
      const unmount = renderToContainer(
        <LoginBeforeNavigate
          visible={true}
          onClose={() => {
            unmount();
          }}
        />,
      );
    },
  };
};
