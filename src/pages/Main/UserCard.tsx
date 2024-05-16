import React from 'react';
import styles from './userCard.module.less';
import Avatar from '@components/Avatar';
import { FollowButton, FollowButtonProps } from '@pages/components';
import { User } from '@typings/index';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import { CloseStrong, LargeVerifiedBadge } from '@components/Icon';
import cs from 'classnames';
import Popover from '@components/Popover';
import { isSupportTouch } from '@utils/index';
import { UserCard as UserCardItem } from '@pages/components';
const classNamePrefix = 'user-card';

type UserCardProps = {
  user: User;
  onDelete?: (uid: string) => void;
  className?: string;
} & Pick<FollowButtonProps, 'onFollowingChange'>;

const UserCard: React.FC<UserCardProps> = ({
  user,
  className,
  onDelete,
  onFollowingChange,
}) => {
  const { isVerified } = user;
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <Link
        to={`/@${user?.username}`}
        className={styles[`${classNamePrefix}-inner`]}
      >
        <div className={styles[`${classNamePrefix}-inner-avatar`]}>
          <Avatar size={80} url={user?.profilePicUrl} />
          {isVerified && (
            <div className={styles[`${classNamePrefix}-inner-avatar-badge`]}>
              <LargeVerifiedBadge viewBox="-4 0 27 19" size={25} />
            </div>
          )}
        </div>

        <div className={styles[`${classNamePrefix}-inner-profile`]}>
          <Popover
            openDelay={300}
            key={user?.id}
            content={
              isSupportTouch ? null : (
                <UserCardItem
                  user={user}
                  onFollowingChange={onFollowingChange}
                />
              )
            }
            trigger="hover"
            placement="bottom-start"
          >
            <div className={styles[`${classNamePrefix}-inner-profile-inner`]}>
              <span
                className={
                  styles[`${classNamePrefix}-inner-profile-inner-full-name`]
                }
              >
                {user?.fullName}
              </span>
              <span
                className={
                  styles[`${classNamePrefix}-inner-profile-inner-username`]
                }
              >
                {user?.username}
              </span>
            </div>
          </Popover>
        </div>

        <FollowButton
          className={styles[`${classNamePrefix}-inner-profile-follow-button`]}
          user={user}
          type="primary"
          onFollowingChange={onFollowingChange}
        />
      </Link>
      <div className={styles[`${classNamePrefix}-delete`]}>
        <Button
          type="text"
          className={styles[`${classNamePrefix}-delete-button`]}
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            onDelete?.(user.id);
          }}
        >
          <CloseStrong viewBox="0 0 24 24" size={8} />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
