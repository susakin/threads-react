import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { PageContainer } from '@pages/components';
import PostComposer from './PostComposer';
import { Tabs, Skeleton } from '@components/index';
import styles from './index.module.less';
import { getTimeline, getFollowingPosts } from '@services/main';
import { RequestType, PostList } from '@pages/components';
import { uniqueId } from 'lodash';
import { NavigationContext } from '@context/NavigationProvider';
import { ActionRefType } from '@pages/components/List';
import { useLocation, useNavigate } from 'react-router-dom';
import Recommend from './Recommend';
import SwitchButton from './SwitchButton';

const classNamePrefix = 'main';

const Main: React.FC = () => {
  const timelineActionRef = useRef<ActionRefType>(null);
  const followingActionRef = useRef<ActionRefType>(null);
  const { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState<string>('/');

  useLayoutEffect(() => {
    const isFollowing = pathname === '/following';
    const path = isFollowing ? '/following' : '/';
    setActiveKey(path);

    navigationEmitter?.emit({
      type: 'main',
      path,
    });
  }, [pathname]);

  const navigate = useNavigate();

  const [hasFetchedRecommend, setHasFetchedRecommend] =
    useState<boolean>(false);
  const [hasFetchedFollowing, setHasFetchedFollowing] =
    useState<boolean>(false);

  const fetchTimeline: RequestType = useCallback(async ({ page, pageSize }) => {
    const { code, msg, data } = await getTimeline<any, any>({
      page,
      pageSize,
    });

    return {
      success: code == 200,
      msg,
      data: (data?.posts || []).map((item: any) => {
        return {
          id: uniqueId(),
          posts: [item],
        };
      }),
      total: data?.total,
    };
  }, []);
  const { state } = useContext(NavigationContext);
  const { navigationEmitter } = state;

  function reload(path: string) {
    if (window.scrollY) {
      window.scrollTo(0, 0);
    } else {
      if (path !== activeKey) return;
      if (activeKey === '/') {
        timelineActionRef.current?.reload?.(true);
      } else {
        followingActionRef?.current?.reload?.(true);
      }
    }
  }

  const fetchFollowingPosts: RequestType = useCallback(
    async ({ page, pageSize }) => {
      const { code, msg, data } = await getFollowingPosts<any, any>({
        page,
        pageSize,
      });

      return {
        success: code == 200,
        msg,
        data: (data?.posts || []).map((item: any) => {
          return {
            id: uniqueId(),
            posts: [item],
          };
        }),
        total: data?.total,
      };
    },
    [],
  );

  const changeUrl = (path: string) => {
    navigate(`${path}`, { replace: true });
  };

  function onTabTitleClick(key: string) {
    navigationEmitter?.emit({
      type: 'main',
      path: key as any,
    });
    reload(key);
    setActiveKey(key);
    changeUrl(key);
  }

  navigationEmitter?.useSubscription(props => {
    if (props.type !== 'main') return;
    if (props.path === undefined) {
      reload(pathname);
    }
  });

  return (
    <>
      <PageContainer>
        <PostComposer />
        <Tabs
          activeKey={activeKey}
          headerClassName={styles[`${classNamePrefix}-tabs`]}
          onTabTitleClick={onTabTitleClick}
        >
          <Tabs.Tab title="为你推荐" key="/">
            <PostList
              randomRender={index => {
                if (index === 9) {
                  return <Recommend />;
                }
                return null;
              }}
              spin={hasFetchedRecommend ? null : <Skeleton />}
              cacheKey="recommend"
              indentWhenTransparentLine
              hasBorderTop={false}
              ignoreMutingUser={false}
              actionRef={timelineActionRef}
              pageSize={10}
              request={fetchTimeline}
              emptyPlaceholder="暂时还没有帖子。"
              hasLoadingContainer
              onDataChange={data => {
                setHasFetchedRecommend(data.length > 0);
              }}
            />
          </Tabs.Tab>
          <Tabs.Tab title="已关注" key="/following">
            <PostList
              cacheKey="following"
              hasBorderTop={false}
              indentWhenTransparentLine
              ignoreMutingUser={false}
              actionRef={followingActionRef}
              hasLoadingContainer
              hasRepostSign
              onDataChange={data => {
                setHasFetchedFollowing(data.length > 0);
              }}
              spin={hasFetchedFollowing ? null : <Skeleton />}
              pageSize={10}
              request={fetchFollowingPosts}
              emptyPlaceholder="暂时还没有帖子。"
            />
          </Tabs.Tab>
        </Tabs>
        <SwitchButton />
      </PageContainer>
    </>
  );
};

export default Main;
