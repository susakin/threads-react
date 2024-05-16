import React, { useContext, useMemo, useRef, useState } from 'react';
import SearchInput, { SearchInputActionRefType } from './SearchInput';
import { PageContainer, RequestType } from '../components';
import styles from './index.module.less';
import SearchResult from './SearchResult';
import useViewport from '@hooks/useViewport';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '@context/AuthProvider';
import Recommend from './Recommend';
import { searchPost } from '@services/post';
import { PostList } from '../components';
import { uniqueId } from 'lodash';
import cs from 'classnames';

const classNamePrefix = 'search';

const Search: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const { viewportWidth } = useViewport();
  const [focused, setFocused] = useState<boolean>(false);
  const viewportWidth699 = viewportWidth <= 699;
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');
  const serpType = searchParams.get('serp_type');
  const { state } = useContext(AuthContext);
  const { user } = state;
  const hasSearchVal = searchVal?.length !== 0;
  const active = hasSearchVal && focused;

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

  const hidden = active && viewportWidth699;
  const actionRef = useRef<SearchInputActionRefType>();

  return (
    <PageContainer>
      <div className={styles[`${classNamePrefix}`]}>
        <div className={styles[`${classNamePrefix}-input`]}>
          <SearchInput
            actionRef={actionRef}
            defaultValue={q as string}
            onValueChange={v => {
              setSearchVal(v);
            }}
            onFocusedChange={focused => {
              setFocused(focused);
            }}
          >
            {active && !viewportWidth699 && (
              <SearchResult
                onSearchPostClick={() => {
                  actionRef?.current?.changeFocusedStatus(false);
                }}
                searchVal={searchVal}
                className={styles[`${classNamePrefix}-input-result`]}
              />
            )}
          </SearchInput>
        </div>
        <Recommend
          currentUid={user?.id}
          gray={active && !viewportWidth699}
          hidden={hidden || q !== null}
        />
        {active && viewportWidth699 && (
          <SearchResult
            onSearchPostClick={() => {
              actionRef?.current?.changeFocusedStatus(false);
            }}
            searchVal={searchVal}
            className={styles[`${classNamePrefix}-result`]}
          />
        )}
        {q !== null && (
          <PostList
            indent
            emptyPlaceholder="没有结果"
            hasBorderTop={false}
            request={fetchPost}
            cacheKey={`search-${serpType}-${q}`}
            params={params}
            className={cs(styles[`${classNamePrefix}-post-list`], {
              [styles[`${classNamePrefix}-post-list-hidden`]]: hidden,
            })}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default Search;
