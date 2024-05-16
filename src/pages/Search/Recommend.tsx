import React, { useContext, useRef } from 'react';
import { RequestType, UserList } from '../components';
import styles from './recommend.module.less';
import { getRecommendedUsers } from '@services/serach';
import cs from 'classnames';
import { ActionRefType } from '@pages/components/List';
import { NavigationContext } from '@context/NavigationProvider';

type RecommendProps = {
  currentUid?: string;
  gray?: boolean;
  hidden?: boolean;
  style?: React.CSSProperties;
};

const classNamePrefix = 'recommend';

const Recommend: React.FC<RecommendProps> = ({ gray, hidden, style }) => {
  const userListRef = useRef<ActionRefType>(null);
  const { state } = useContext(NavigationContext);
  const { navigationEmitter } = state;

  const recommendedUsers: RequestType = async ({ page, pageSize }) => {
    const { code, data, msg }: any = await getRecommendedUsers({
      page,
      pageSize,
    });
    return {
      success: code === 200,
      msg,
      data:
        data?.users?.map((user: any) => {
          return {
            user,
          };
        }) || [],
      total: data?.total,
    };
  };

  navigationEmitter?.useSubscription(props => {
    props.type === 'search' && userListRef.current?.reload?.(true);
  });

  return (
    <UserList
      actionRef={userListRef}
      hasLoadingContainer
      hasFollower={true}
      request={recommendedUsers}
      cacheKey="search-recommend"
      hasLastItemSplit={true}
      style={style}
      className={cs(styles[`${classNamePrefix}`], {
        [styles[`${classNamePrefix}-gray`]]: gray,
        [styles[`${classNamePrefix}-hidden`]]: hidden,
      })}
      itemClassName={styles[`${classNamePrefix}-item`]}
    />
  );
};

export default Recommend;
