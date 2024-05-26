import { RequestType, UserList } from '@pages/components';
import { getUnread, getUserActivities, markAsRead } from '@services/activity';
import React, { useContext, useMemo, useRef } from 'react';
import styles from './activityList.module.less';
import { NavigationContext } from '@context/NavigationProvider';
import { useFetch } from '@hooks/useFetch';
import { UserActivity } from '@pages/components/User';
import { ActionRefType } from '@pages/components/List';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';
import { PostSkeleton } from '@components/index';

export type ActivityListProps = {
  type?: string;
  path?: string;
  emitter?: EventEmitter<string | undefined>;
  active?: boolean;
};

const classNamePrefix = 'activity-list';

const ActivityList: React.FC<ActivityListProps> = ({
  type,
  path,
  emitter,
  active,
}) => {
  const { dispatch, state } = useContext(NavigationContext);
  const { navigationEmitter, unreadNotificationNum } = state;
  const listRef = useRef<ActionRefType<UserActivity>>(null);

  const { run: _getUnread } = useFetch(getUnread<number, any>, {
    manual: true,
    ignoreErrorMsg: true,
    onSuccess(unreadNotificationNum) {
      dispatch({
        type: 'SET_UNREAD_NOTIFICATION_NUM',
        payload: {
          unreadNotificationNum,
        },
      });
    },
  });

  function formatActivityList(data: any) {
    return data?.map(
      ({
        fromUser,
        context,
        createdAt,
        id,
        type,
        content,
        postCode,
        relatePostCode,
      }: any) => {
        return {
          user: fromUser,
          activity: {
            context,
            createdAt,
            type,
            content,
            postCode,
            relatePostCode,
          },
          id,
        };
      },
    );
  }

  const { run: _markAsRead } = useFetch<any, any>(markAsRead, {
    manual: true,
    onSuccess() {
      (unreadNotificationNum || 0) > 0 && _getUnread();
    },
    ignoreErrorMsg: true,
  });

  const request: RequestType = async ({ page, pageSize, type }) => {
    const { code, msg, data } = await getUserActivities<any, any>(type, {
      page,
      pageSize,
    });
    const ids = data?.activities?.map((item: any) => item.id);
    ids.length && _markAsRead({ ids });
    return {
      success: code == 200,
      msg,
      data: formatActivityList(data?.activities),
      total: data?.total,
    };
  };

  function reload(activePath?: string) {
    if (path === activePath) {
      if (window.scrollY) {
        window.scrollTo(0, 0);
      } else {
        listRef?.current?.reload?.(true);
      }
    }
  }

  navigationEmitter?.useSubscription(props => {
    if (props?.type !== 'activity') return;
    props?.fromNavigation && reload(props?.path);
  });

  emitter?.useSubscription?.(path => {
    active && reload(path);
  });

  const params = useMemo(() => {
    return {
      type,
    };
  }, [type]);

  return (
    <>
      <UserList
        actionRef={listRef}
        hasLoadingContainer
        cacheKey={`activity-${type}`}
        ignoreErrorMsg
        pageSize={15}
        hasLastItemSplit={true}
        hasFollower={false}
        params={params}
        spin={len => {
          return len ? null : <PostSkeleton hasBadge />;
        }}
        emptyPlaceholder="还没有动态。"
        request={request}
        itemClassName={styles[`${classNamePrefix}-user`]}
      />
    </>
  );
};

export default ActivityList;
