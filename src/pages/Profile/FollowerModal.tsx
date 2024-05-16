import React from 'react';
import Modal from '@components/Modal/Modal';
import { Popup } from '@components/index';
import FollowerTabs from './FollowerTabs';
import useViewport from '@hooks/useViewport';
import { User } from '@typings/index';

type FollowerModalProps = {
  visible?: boolean;
  onClose?: () => void;
  user?: User;
};

const FollowerModal: React.FC<FollowerModalProps> = ({
  visible,
  onClose,
  user,
}) => {
  const { viewportWidth } = useViewport();

  const Container = viewportWidth < 700 ? Popup : Modal;

  return (
    <Container visible={visible} onClose={onClose} style={{ width: 520 }}>
      <FollowerTabs user={user} />
    </Container>
  );
};

export default FollowerModal;
