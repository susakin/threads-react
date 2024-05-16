import React from 'react';
import { Mask } from '@components/index';
import UserCard, { UserCardProps } from '../UserCard';

export type UserCardModalProps = {
  visible?: boolean;
  onClose?: () => void;
} & Pick<UserCardProps, 'user' | 'onFollowingChange'>;

const UserCardModal: React.FC<UserCardModalProps> = ({
  visible,
  onClose,
  ...rest
}) => {
  return (
    <Mask
      visible={visible}
      onClose={onClose}
      color="rgba(0,0,0,.7)"
      hasClose={false}
      renderToBody={true}
    >
      <UserCard {...rest} />
    </Mask>
  );
};

export default UserCardModal;
