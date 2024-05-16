import React, { useState } from 'react';
import styles from './recommend.module.less';
import ScrollContainer from '@components/ScrollContainer';
import UserCard from './UserCard';
import { useFetch } from '@hooks/useFetch';
import { getRecommendedUsers } from '@services/serach';
import { User } from '@typings/index';

const classNamePrefix = 'recommend';

const Recommend: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { loading } = useFetch(getRecommendedUsers, {
    onSuccess(res: any) {
      setUsers(res?.users);
    },
    defaultParams: [{ page: 1, pageSize: 20 }],
  });

  if (loading || !users.length) return null;

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <div className={styles[`${classNamePrefix}-title`]}>
        <span className={styles[`${classNamePrefix}-title-text`]}>
          为你推荐
        </span>
      </div>
      <ScrollContainer
        className={styles[`${classNamePrefix}-scroll-container`]}
      >
        {users.map(user => (
          <UserCard
            user={user}
            key={user.id}
            className={styles[`${classNamePrefix}-user`]}
            onDelete={uid => {
              setUsers(users => users.filter(user => user.id !== uid));
            }}
            onFollowingChange={(uid, updateFiled) => {
              setUsers(users => {
                return users.map(item => {
                  if (item.id === uid) {
                    item.friendshipStatus = {
                      ...item.friendshipStatus,
                      ...updateFiled,
                    };
                  }
                  return item;
                });
              });
            }}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Recommend;
