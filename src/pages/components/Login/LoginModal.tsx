import React from 'react';
import Modal from '@components/Modal/Modal';
import styles from './loginModal.module.less';
import Login from '.';
import renderToContainer from '@utils/renderToContainer';

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

export const loginModal = {
  show() {
    const unmount = renderToContainer(
      <LoginModal
        visible={true}
        onClose={() => {
          unmount();
        }}
      />,
    );
  },
};
