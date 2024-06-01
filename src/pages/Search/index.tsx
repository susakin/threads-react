import React, { useContext, useMemo, useRef, useState } from 'react';
import { PageContainer, RequestType } from '../components';
import styles from './index.module.less';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '@context/AuthProvider';
import Recommend from './Recommend';
import { searchPost } from '@services/post';
import { PostList } from '../components';
import { uniqueId } from 'lodash';
import cs from 'classnames';
import SearchInput from '@components/SearchInput';
import SearchResult from './SearchResult';
import Tabs from '@components/Tabs';
import { ActionRefType } from '@pages/components/List';

const classNamePrefix = 'search';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');
  const filter = searchParams.get('filter');
  const [searchVal, setSearchVal] = useState<string>(`${q || ''}`);
  const navigate = useNavigate();
  const serpType = searchParams.get('serp_type');
  const { state } = useContext(AuthContext);
  const { user } = state;
  const defaultListRef = useRef<ActionRefType>(null);
  const recentListRef = useRef<ActionRefType>(null);

  const [activeKey, setActiveKey] = useState<string>(filter || '');

  const fetchPost: RequestType = async ({
    page,
    pageSize,
    caption,
    tag,
    filter,
  }) => {
    const { code, data, msg }: any = await searchPost({
      page,
      pageSize,
      caption,
      tag,
      filter,
    });

    return {
      success: code === 200,
      msg,
      data:
        data?.posts?.map((post: any) => {
          return {
            id: uniqueId(),
            posts: [post],
          };
        }) || [],
      total: data?.total,
    };
  };

  const params = useMemo(() => {
    switch (serpType) {
      case 'default':
        return { caption: q };
      case 'tag':
        return { tag: `#${q}` };
    }
  }, [q, serpType]);

  const recentParams = useMemo(() => {
    return {
      ...params,
      filter: 'recent',
    };
  }, [params]);

  function reload(key?: string) {
    setSearchParams(
      { q: q as any, serp_type: serpType as any, filter: key ? key : '' },
      { replace: true },
    );
    if (key === activeKey) {
      if (window.scrollY) {
        window.scrollTo(0, 0);
      } else {
        !activeKey
          ? defaultListRef?.current?.reload?.(true)
          : recentListRef?.current?.reload?.(true);
      }
    }
  }

  return (
    <PageContainer>
      <div className={styles[`${classNamePrefix}`]}>
        <div className={styles[`${classNamePrefix}-input`]}>
          <SearchInput
            value={searchVal}
            onChange={v => {
              setSearchVal(v);
            }}
            className={styles[`${classNamePrefix}-input-inner`]}
            onESC={() => {
              setSearchVal('');
            }}
            placeholder="搜索"
            onEnter={() => {
              const trimValue = searchVal?.trim();
              if (q !== trimValue && trimValue?.length) {
                navigate(`/search?serp_type=default&q=${trimValue}`);
              }
            }}
          />
        </div>
        <Recommend currentUid={user?.id} hidden={q !== null || !!searchVal} />
        {q !== null && (
          <div className={styles[`${classNamePrefix}-post`]}>
            <Tabs
              tabType="button"
              activeKey={activeKey}
              onChange={key => {
                setActiveKey(key);
              }}
              onTabClick={key => {
                reload(key);
              }}
              tabClassName={styles[`${classNamePrefix}-post-tab`]}
            >
              <Tabs.Tab title="热门" key={''}>
                <PostList
                  indent
                  emptyPlaceholder="没有结果"
                  hasBorderTop={false}
                  hasLoadingContainer
                  request={fetchPost}
                  cacheKey={`search-${serpType}-${q}`}
                  hasReplyTo
                  actionRef={defaultListRef}
                  pageSize={10}
                  params={params}
                  className={cs(styles[`${classNamePrefix}-post-list`])}
                />
              </Tabs.Tab>
              <Tabs.Tab title="近期" key={'recent'}>
                <PostList
                  indent
                  hasLoadingContainer
                  emptyPlaceholder="没有结果"
                  hasBorderTop={false}
                  pageSize={10}
                  request={fetchPost}
                  cacheKey={`search-recent-${serpType}-${q}`}
                  hasReplyTo
                  actionRef={recentListRef}
                  params={recentParams}
                  className={cs(styles[`${classNamePrefix}-post-list`])}
                />
              </Tabs.Tab>
            </Tabs>
          </div>
        )}
        {q === null && searchVal?.length !== 0 && (
          <SearchResult searchVal={searchVal} />
        )}
      </div>
    </PageContainer>
  );
};

export default Search;
