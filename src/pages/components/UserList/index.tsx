import React from 'react';
import User, { UserProps, UserActivity } from '../User';
import styles from './index.module.less';
import List, { ListProps } from '../List';
import cs from 'classnames';
import { PickFollowButtonProps } from '../UserCard';
import HideableComponent from '@components/HideableComponent';

const classNamePrefix = 'user-list';

type UserListProps = {
  style?: React.CSSProperties;
  className?: string;
  itemClassName?: string;
  hasFollower?: boolean;
  hasFollow?: boolean;
  hasLastItemSplit?: boolean;
} & Pick<
  UserProps,
  | 'followButtonClassName'
  | 'onClick'
  | 'canNavigate'
  | 'disabledUsernameLink'
  | 'hasAction'
>;

function UserList<T extends Record<string, any>>({
  className,
  itemClassName,
  hasFollower,
  onClick,
  hasLastItemSplit = false,
  followButtonClassName,
  style,
  canNavigate,
  disabledUsernameLink,
  hasAction,
  ...rest
}: UserListProps & ListProps<UserActivity, T> & PickFollowButtonProps) {
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)} style={style}>
      <List<UserActivity, T> {...rest}>
        {({ data: userList, updateData, deleteItem }) => {
          return userList?.map((item, index) => {
            const { user, activity } = item;
            const activityType = activity?.type;
            return (
              <HideableComponent key={item?.id || user?.id}>
                <User
                  hasAction={hasAction}
                  canNavigate={canNavigate}
                  disabledUsernameLink={disabledUsernameLink}
                  user={user}
                  activity={activity}
                  hasFollower={hasFollower}
                  hasTime={typeof activityType !== 'undefined'}
                  className={itemClassName}
                  hasSplitLine={
                    index !== userList?.length - 1 ||
                    (index === userList?.length - 1 && hasLastItemSplit)
                  }
                  followButtonClassName={followButtonClassName}
                  onClick={onClick}
                  onFollowingChange={(uid, { following, outgoingRequest }) => {
                    updateData(data => {
                      return data?.map(item => {
                        if (item?.user.id == uid) {
                          return {
                            ...item,
                            user: {
                              ...item.user,
                              friendshipStatus: {
                                ...item.user.friendshipStatus,
                                following,
                                outgoingRequest,
                              },
                            },
                          };
                        }
                        return item;
                      });
                    });
                  }}
                  onDelete={() => {
                    deleteItem(item.id);
                  }}
                />
              </HideableComponent>
            );
          });
        }}
      </List>
    </div>
  );
}

export default UserList;
