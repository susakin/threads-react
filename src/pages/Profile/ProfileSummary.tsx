import React, { useState } from 'react';
import { Avatar, AvatarViewer } from '@components/index';
import { LargeVerifiedBadge } from '@components/Icon';
import styles from './profileSummary.module.less';
import ProfileFollower from './ProfileFollower';
import ProfileModal from './ProfileModal';
import { User } from '@typings/index';
import { LinkifyText } from '@pages/components';

const classNamePrefix = 'profile-summary';

type ProfileSummaryProps = {
  user?: User;
  onUserFieldUpdate?: (user: Partial<User>) => void;
};

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  user,
  onUserFieldUpdate,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { fullName, username, profilePicUrl, isVerified, biography } =
    user || {};
  const [proileVisible, setProfileVisible] = useState<boolean>(false);
  const _profilePicUrl = profilePicUrl || require('@assets/images/avatar.jpg');

  return (
    <>
      <div className={styles[`${classNamePrefix}`]}>
        <div className={styles[`${classNamePrefix}-header`]}>
          <div className={styles[`${classNamePrefix}-header-name`]}>
            <div className={styles[`${classNamePrefix}-header-name-full-name`]}>
              <span
                onClick={() => {
                  setProfileVisible(true);
                }}
                role="button"
                tabIndex={0}
                className={
                  styles[`${classNamePrefix}-header-name-full-name-text`]
                }
              >
                {fullName}
              </span>
            </div>
            <div className={styles[`${classNamePrefix}-header-name-username`]}>
              {username}
            </div>
          </div>
          <div
            className={styles[`${classNamePrefix}-header-avatar`]}
            onClick={() => {
              setVisible(true);
            }}
            role="button"
            tabIndex={0}
          >
            <Avatar url={_profilePicUrl} size={'100%'} />
            {isVerified && (
              <div className={styles[`${classNamePrefix}-header-avatar-badge`]}>
                <LargeVerifiedBadge viewBox="-4 0 27 19" size={25} />
              </div>
            )}
          </div>
        </div>
        <div className={styles[`${classNamePrefix}-biography`]}>
          <LinkifyText text={biography} />
        </div>
        <ProfileFollower user={user} onUserFieldUpdate={onUserFieldUpdate} />
      </div>
      <AvatarViewer
        url={_profilePicUrl}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
      <ProfileModal
        visible={proileVisible}
        user={user}
        onClose={() => {
          setProfileVisible(false);
        }}
      />
    </>
  );
};

export default ProfileSummary;
