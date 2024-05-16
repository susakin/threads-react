import React, { useMemo } from 'react';
import { Tabs, ShortenNumber } from '@components/index';
import styles from './followerTabs.module.less';
import { User } from '@typings/index';
import { UserList, RequestType } from '@pages/components';

import { getFollower, getFollowing } from '@services/profile';

type TabsTitleProps = {
  label?: React.ReactNode;
  count?: number;
};

const TabsTitle: React.FC<TabsTitleProps> = ({ label, count }) => {
  const classNamePrefix = 'tabs-title';
  return (
    <>
      <span className={styles[`${classNamePrefix}-label`]}>{label}</span>
      <span className={styles[`${classNamePrefix}-count`]}>
        <ShortenNumber value={count || 0} />
      </span>
    </>
  );
};

const classNamePrefix = 'follower-tabs';

type FollowerModalProps = {
  user?: User;
};

const FollowerTabs: React.FC<FollowerModalProps> = ({ user }) => {
  const { followerCount, followingCount, username } = user || {};

  const params = useMemo(() => {
    return { uid: user?.id };
  }, []);

  const _getFollower: RequestType = async ({ page, pageSize, uid }) => {
    const { data, code, msg } = await getFollower(uid, {
      page,
      pageSize,
    });
    return {
      success: code == 200,
      msg,
      data: data?.users?.map((item: User) => ({
        user: item,
        id: item.id,
      })),
      total: data?.total,
    };
  };

  const _getFollowing: RequestType = async ({ page, pageSize, uid }) => {
    const { data, code, msg } = await getFollowing(uid, {
      page,
      pageSize,
    });
    return {
      success: code == 200,
      msg,
      data: data?.users?.map((item: User) => ({
        user: item,
        id: item.id,
      })),
      total: data?.total,
    };
  };

  return (
    <div className={styles[`${classNamePrefix}`]}>
      <Tabs
        headerClassName={styles[`${classNamePrefix}-header`]}
        disabledContentScroll={false}
      >
        <Tabs.Tab
          title={<TabsTitle label="粉丝" count={followerCount} />}
          key="follower"
        >
          <UserList
            request={_getFollower}
            params={params}
            hasFollower={false}
            hasFollow={true}
            emptyPlaceholder={`${username}还没有任何粉丝。`}
            itemClassName={styles[`${classNamePrefix}-user`]}
          />
        </Tabs.Tab>
        <Tabs.Tab
          title={<TabsTitle label="已关注" count={followingCount} />}
          key="followed"
        >
          <UserList
            request={_getFollowing}
            hasFollower={false}
            hasFollow={true}
            params={params}
            emptyPlaceholder={`${username}还没有任何关注者。`}
            itemClassName={styles[`${classNamePrefix}-user`]}
          />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default FollowerTabs;
