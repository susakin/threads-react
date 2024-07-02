import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@components/index';
import styles from './index.module.less';
import UserPreview from '../UserPreview';
import { User } from '@typings/index';
import FollowButton, { FollowButtonProps } from '../FollowButton';
import { LargeVerifiedBadge } from '@components/Icon';
import LinkifyText from '../LinkifyText';
import { shortenNumber } from '@utils/numberFormat';

const classNamePrefix = 'user-card';

export type PickFollowButtonProps = Pick<
  FollowButtonProps,
  'onFollowingChange'
>;

export type UserCardProps = {
  user?: User;
} & PickFollowButtonProps;

const UserCard: React.FC<UserCardProps> = ({ user, ...rest }) => {
  const {
    fullName,
    username,
    profilePicUrl,
    biography,
    profileContextFacepileUsers,
    followerCount,
    friendshipStatus,
    isVerified,
  } = user || {};
  return (
    <div
      className={styles[`${classNamePrefix}`]}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <div className={styles[`${classNamePrefix}-header`]}>
        <div className={styles[`${classNamePrefix}-header-name`]}>
          <Link
            to={`/@${username}`}
            className={styles[`${classNamePrefix}-header-full-name`]}
          >
            {fullName}
          </Link>
          <Link
            to={`/@${username}`}
            className={styles[`${classNamePrefix}-header-username`]}
          >
            {username}
          </Link>
        </div>
        <div className={styles[`${classNamePrefix}-header-avatar`]}>
          <Link to={`/@${username}`}>
            <Avatar size={64} url={profilePicUrl} />
            {isVerified && (
              <div className={styles[`${classNamePrefix}-header-avatar-badge`]}>
                <LargeVerifiedBadge viewBox="-4 0 27 19" size={25} />
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className={styles[`${classNamePrefix}-biography`]}>
        <LinkifyText text={biography} />
      </div>
      <div className={styles[`${classNamePrefix}-follower`]}>
        <UserPreview
          urls={profileContextFacepileUsers?.map(
            item => item.profilePicUrl as string,
          )}
        />
        <div className={styles[`${classNamePrefix}-follower-num`]}>
          {shortenNumber(followerCount as number)} 位粉丝
        </div>
      </div>
      {!user?.friendshipStatus?.isOwn && (
        <FollowButton
          className={styles[`${classNamePrefix}-follow`]}
          user={user as any}
          type={friendshipStatus?.following ? 'default' : 'primary'}
          {...rest}
        />
      )}
    </div>
  );
};

export default UserCard;
