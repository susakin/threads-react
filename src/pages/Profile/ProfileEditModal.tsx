import React, { useRef, useState } from 'react';
import { ScrollInModal } from '@components/index';
import Modal from '@components/Modal/Modal';
import ProfileEdit from './ProfileEdit';
import useViewport from '@hooks/useViewport';
import styles from './profileEditModal.module.less';
import { User } from '@typings/index';
import { ProfileEditRef } from './ProfileEdit';

type ProfileEditModalProps = {
  visible?: boolean;
  onClose?: () => void;
  user?: User;
  onUserFieldUpdate?: (user: Partial<Omit<User, 'id'>>) => void;
};

const classNamePrefix = 'profile-edit-modal';

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  visible,
  onClose,
  user,
  onUserFieldUpdate,
}) => {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const { viewportWidth } = useViewport();
  const inSamllScreen = viewportWidth < 700;

  const profileEditRef = useRef<ProfileEditRef>(null);

  if (inSamllScreen) {
    return (
      <ScrollInModal
        title="编辑主页"
        loading={submitLoading}
        visible={visible}
        onCancel={onClose}
        onOk={() => {
          profileEditRef?.current?.submit?.();
        }}
      >
        <div className={styles[`${classNamePrefix}`]}>
          <ProfileEdit
            onSubmitLoading={loading => {
              setSubmitLoading(loading);
            }}
            ref={profileEditRef}
            user={user}
            onUserFieldUpdate={updateFields => {
              onUserFieldUpdate?.(updateFields);
              onClose?.();
            }}
          />
        </div>
      </ScrollInModal>
    );
  }

  return (
    <Modal visible={visible} onClose={onClose} style={{ width: 520 }}>
      <ProfileEdit
        user={user}
        onUserFieldUpdate={updateFields => {
          onUserFieldUpdate?.(updateFields);
          onClose?.();
        }}
      />
    </Modal>
  );
};

export default ProfileEditModal;
