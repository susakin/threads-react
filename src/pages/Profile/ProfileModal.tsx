import React from 'react';
import Modal from '@components/Modal/Modal';
import cs from 'classnames';
import { Avatar, DragModal } from '@components/index';
import { VerifiedBadge } from '@components/Icon';
import styles from './profileModal.module.less';
import { User } from '@typings/index';

import dayjs from 'dayjs';
import useViewport from '@hooks/useViewport';
import { shortenNumber } from '@utils/numberFormat';

type ProfileItemProps = {
  label?: React.ReactNode;
  value?: React.ReactNode;
  className?: string;
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  label,
  value,
  className,
}) => {
  const classNamePrefix = 'profile-item';
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <div className={styles[`${classNamePrefix}-label`]}>{label}</div>
      {!!value && (
        <div className={styles[`${classNamePrefix}-value`]}>{value}</div>
      )}
    </div>
  );
};

type ProfileModalProps = {
  visible?: boolean;
  onClose?: () => void;
  user?: User;
};

const classNamePrefix = 'profile-modal';

const ProfileModal: React.FC<ProfileModalProps> = ({
  visible,
  onClose,
  user,
}) => {
  const {
    fullName,
    username,
    isVerified,
    profilePicUrl,
    createdAt,
    rank,
    location,
  } = user || {};

  const { viewportWidth } = useViewport();
  const inSmallScreen = viewportWidth <= 699;

  const ProfileItems = [
    {
      label: '名称',
      value: (
        <>
          {fullName}(@{username}
          {isVerified && (
            <VerifiedBadge
              fill="rgb(0, 149, 246)"
              size={12}
              viewBox="0 0 40 40"
              className={styles[`${classNamePrefix}-inner-item-badge`]}
            />
          )}
          )
        </>
      ),
      suffix: (
        <div className={styles[`${classNamePrefix}-inner-item-avatar`]}>
          <Avatar url={profilePicUrl} size={54} />
        </div>
      ),
    },
    {
      label: '加入时间',
      value: (
        <>
          {dayjs(createdAt).format('YYYY年MM月')} · # {shortenNumber(rank)}
        </>
      ),
    },
    {
      label: '所在地',
      value: location,
    },
  ];

  const content = (
    <div className={styles[`${classNamePrefix}-inner`]}>
      {ProfileItems.map(({ label, value, suffix }, index) => {
        return (
          <div className={styles[`${classNamePrefix}-inner-item`]} key={index}>
            <ProfileItem
              label={label}
              value={value}
              className={cs({
                [styles[`${classNamePrefix}-inner-item-last`]]:
                  index === ProfileItems.length - 1,
              })}
            />
            {suffix}
          </div>
        );
      })}
    </div>
  );

  if (inSmallScreen) {
    return (
      <DragModal visible={visible} onClose={onClose}>
        {content}
      </DragModal>
    );
  }

  return (
    <Modal
      className={styles[`${classNamePrefix}`]}
      visible={visible}
      onClose={onClose}
      animationType="scale-in"
    >
      {content}
    </Modal>
  );
};

export default ProfileModal;
