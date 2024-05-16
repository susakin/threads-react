import React, { useRef, useState } from 'react';
import { Avatar } from '@components/index';
import { Plus, Check } from '@components/Icon';
import UserCardModal, { UserCardModalProps } from '../UserCardModal';
import cs from 'classnames';
import styles from './index.module.less';

const classNamePrefix = 'avatar-width-follow';

type AvatarWithFollowProps = {
  size?: number;
  className?: string;
  hasFollow?: boolean;
} & Pick<UserCardModalProps, 'user' | 'onFollowingChange'>;
const AvatarWithFollow: React.FC<AvatarWithFollowProps> = ({
  size,
  className,
  user,
  hasFollow = true,
  ...rest
}) => {
  const hasFollowRef = useRef<boolean>(!user?.friendshipStatus?.following);
  const [visible, setVisible] = useState<boolean>(false);
  const { friendshipStatus, profilePicUrl, username } = user || {};
  const { following, isOwn } = friendshipStatus || {};
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <div
        className={styles[`${classNamePrefix}-inner`]}
        onClick={e => e.stopPropagation()}
      >
        <Avatar
          url={profilePicUrl || require('@assets/images/avatar.jpg')}
          size={size}
          linkTo={`/@${username}`}
        />
        {hasFollowRef.current && hasFollow && !isOwn && (
          <div
            className={styles[`${classNamePrefix}-inner-follow`]}
            onClick={() => {
              setVisible(true);
            }}
          >
            {following ? (
              <Check size={8} viewBox="0 0 8 8" fill="currentColor" />
            ) : (
              <Plus size={10} viewBox="0 0 10 9" fill="currentColor" />
            )}
          </div>
        )}
      </div>
      <UserCardModal
        visible={visible}
        user={user}
        {...rest}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default AvatarWithFollow;
