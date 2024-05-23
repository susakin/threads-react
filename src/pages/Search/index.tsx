import React, { useContext, useMemo, useState } from 'react';
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

const classNamePrefix = 'search';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const [searchVal, setSearchVal] = useState<string>(`${q || ''}`);
  const navigate = useNavigate();
  const serpType = searchParams.get('serp_type');
  const { state } = useContext(AuthContext);
  const { user } = state;

  const fetchPost: RequestType = async ({ page, pageSize, caption, tag }) => {
    const { code, data, msg }: any = await searchPost({
      page,
      pageSize,
      caption,
      tag,
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
          <PostList
            indent
            emptyPlaceholder="没有结果"
            hasBorderTop={false}
            request={fetchPost}
            cacheKey={`search-${serpType}-${q}`}
            params={params}
            className={cs(styles[`${classNamePrefix}-post-list`])}
          />
        )}
        {q === null && searchVal?.length !== 0 && (
          <SearchResult searchVal={searchVal} />
        )}
      </div>
    </PageContainer>
  );
};

export default Search;
