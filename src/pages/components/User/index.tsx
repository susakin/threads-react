import React from 'react';
import { Avatar, Time } from '@components/index';
import {
  NotificationLike,
  NotificationFollow,
  NocificationReply,
  NotificationQuote,
  NotificationRepost,
  NocificationHello,
  Mention,
  NotificationVote,
} from '@components/Icon';
import { UserPreview, Username } from '@pages/components';
import styles from './index.module.less';
import cs from 'classnames';
import { User as IUser } from '@typings/index';
import { FollowButton } from '@pages/components';
import { PickFollowButtonProps } from '../UserCard';
import FollowRequest from './FollowRequest';
import { useNavigate } from 'react-router-dom';
import NotificationStar from '@components/Icon/NotificationStar';
import { shortenNumber } from '@utils/numberFormat';

const classNamePrefix = 'user';

type ActivityType =
  | 'like'
  | 'reply'
  | 'follow'
  | 'mention'
  | 'vote'
  | 'quote'
  | 'repost'
  | 'firstPost'
  | 'followRequest';
const iconNameMap: Record<
  ActivityType,
  { Icon: React.ElementType; color: string }
> = {
  followRequest: {
    color: '#FFC632',
    Icon: NocificationHello,
  },
  like: {
    Icon: NotificationLike,
    color: '#FF007A',
  },
  follow: {
    Icon: NotificationFollow,
    color: '#6E3DEF',
  },
  reply: {
    Icon: NocificationReply,
    color: '#24C3FF',
  },
  mention: {
    Icon: Mention,
    color: '#20c584',
  },
  quote: {
    Icon: NotificationQuote,
    color: '#FE7900',
  },
  repost: {
    Icon: NotificationRepost,
    color: '#C329BF',
  },
  vote: {
    Icon: NotificationVote,
    color: '#007AFF',
  },
  firstPost: {
    Icon: NotificationStar,
    color: '#007AFF',
  },
};

export type Activity = {
  content?: string;
  context?: string;
  type?: ActivityType;
  createdAt?: number;
  postCode?: string;
  relatePostCode?: string;
};

export type UserActivity = {
  id: string;
  user: IUser;
  activity?: Activity;
};

export type UserProps = {
  avatarSize?: number;
  user: IUser;
  activity?: Activity;
  hasFollower?: boolean;
  className?: string;
  hasSplitLine?: boolean;
  hasTime?: boolean;
  canNavigate?: boolean | ((user: IUser, activity?: Activity) => boolean);
  disabledUsernameLink?: boolean;
  followButtonClassName?: string;
  hasAction?: boolean;
  onDelete?: () => void;
  onClick?: (
    data: { user: IUser; activity?: Activity },
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
} & PickFollowButtonProps;

const User: React.FC<UserProps> = ({
  avatarSize = 36,
  hasFollower = true,
  hasSplitLine = true,
  hasTime = false,
  className,
  canNavigate = true,
  disabledUsernameLink = false,
  onClick,
  activity,
  user,
  onDelete,
  hasAction = true,
  ...rest
}) => {
  const { Icon, color } = iconNameMap[activity?.type as ActivityType] || {};
  const naviagte = useNavigate();
  const {
    profilePicUrl,
    fullName,
    profileContextFacepileUsers,
    followerCount,
    username,
  } = user;
  const activityType = activity?.type;
  const hasFollow =
    activityType && activityType !== 'follow'
      ? false
      : !user?.friendshipStatus?.isOwn;

  const hasFollowRequest = activityType === 'followRequest';

  const _canNavigate =
    typeof canNavigate === 'function'
      ? canNavigate(user, activity)
      : canNavigate;

  return (
    <div
      className={cs(
        styles[`${classNamePrefix}`],
        { [styles[`${classNamePrefix}-can-navigate`]]: _canNavigate },
        className,
      )}
      onClick={e => {
        onClick?.({ user, activity }, e);
        if (_canNavigate) {
          const activityType = activity?.type;
          if (
            activityType === 'follow' ||
            activityType == 'followRequest' ||
            !activityType
          ) {
            naviagte(`/@${username}`);
          } else {
            naviagte(
              `/post/${
                activityType === 'quote'
                  ? activity?.relatePostCode
                  : activity?.postCode
              }`,
            );
          }
        }
      }}
    >
      <div className={styles[`${classNamePrefix}-avatar`]}>
        <div className={styles[`${classNamePrefix}-avatar-inner`]}>
          <Avatar url={profilePicUrl} size={avatarSize} />
          {Icon ? (
            <div
              className={styles[`${classNamePrefix}-avatar-inner-icon`]}
              style={{ backgroundColor: color }}
            >
              <Icon size={18} fill="currentColor" viewBox="0 0 18 18" />
            </div>
          ) : null}
        </div>
      </div>
      <div
        className={cs(styles[`${classNamePrefix}-inner`], {
          [styles[`${classNamePrefix}-inner-split-line`]]: hasSplitLine,
        })}
      >
        <div className={styles[`${classNamePrefix}-inner-main`]}>
          <div className={styles[`${classNamePrefix}-inner-main-inner`]}>
            <div
              className={styles[`${classNamePrefix}-inner-main-inner-username`]}
            >
              <Username
                user={user}
                disableLink={disabledUsernameLink}
                {...rest}
              />
              {hasTime && (
                <Time
                  time={activity?.createdAt}
                  className={
                    styles[`${classNamePrefix}-inner-main-inner-username-time`]
                  }
                />
              )}
            </div>
            <div
              className={styles[`${classNamePrefix}-inner-main-inner-context`]}
            >
              {activity?.context || fullName}
            </div>
            {activity?.content && (
              <div
                className={
                  styles[`${classNamePrefix}-inner-main-inner-content`]
                }
              >
                {activity?.content}
              </div>
            )}
          </div>
          {hasAction && (
            <div
              className={cs(
                styles[`${classNamePrefix}-inner-main-action`],
                rest.followButtonClassName,
              )}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              {hasFollow && (
                <FollowButton
                  user={user}
                  className={
                    styles[`${classNamePrefix}-inner-main-action-follow`]
                  }
                  {...rest}
                />
              )}
              {hasFollowRequest && (
                <FollowRequest
                  user={user}
                  onFollowingChange={rest.onFollowingChange}
                  onDelete={onDelete}
                />
              )}
            </div>
          )}
        </div>
        {hasFollower && (
          <div className={styles[`${classNamePrefix}-inner-follower`]}>
            <UserPreview
              urls={profileContextFacepileUsers?.map(
                (item: any) => item.profilePicUrl as string,
              )}
            />
            {shortenNumber(followerCount as number)}
            位粉丝
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
