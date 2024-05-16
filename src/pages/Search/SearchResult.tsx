import React, { useMemo } from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import styles from './searchResult.module.less';
import { Search, Direction } from '@components/Icon';
import { RequestType, UserList } from '@pages/components';
import { getUsersByQuery } from '@services/serach';

const classNamePrefix = 'search-result';

type SearchResultProps = {
  className?: string;
  searchVal?: string;
  onSearchPostClick?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => void;
};

const SearchResult: React.FC<SearchResultProps> = ({
  className,
  searchVal,
  onSearchPostClick,
}) => {
  const _searchVal = searchVal?.trim();
  const queryUsers: RequestType = async ({ page, pageSize, query }) => {
    const { code, data, msg }: any = await getUsersByQuery({
      page,
      pageSize,
      query,
    });
    return {
      success: code === 200,
      msg,
      data: (data?.users || []).map((user: any) => ({ user })),
      total: data?.total,
    };
  };

  const params = useMemo(() => {
    return { query: _searchVal };
  }, [_searchVal]);

  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <Link
        to={`/search?serp_type=default&q=${_searchVal}`}
        className={styles[`${classNamePrefix}-title`]}
        onClick={onSearchPostClick}
      >
        <div className={styles[`${classNamePrefix}-title-icon`]}>
          <Search size={16} viewBox="0 0 26 26" />
        </div>
        <div className={styles[`${classNamePrefix}-title-text`]}>
          <div className={styles[`${classNamePrefix}-title-text-inner`]}>
            搜索“{_searchVal}”
          </div>
          <div className={styles[`${classNamePrefix}-title-text-icon`]}>
            <Direction
              size={16}
              viewBox="0 0 26 26"
              style={{ transform: 'rotate(180deg)' }}
            />
          </div>
        </div>
      </Link>

      <UserList
        hasFollower={true}
        params={params}
        debounceWait={1000}
        request={queryUsers}
        hasLastItemSplit={true}
        className={styles[`${classNamePrefix}-user`]}
        itemClassName={styles[`${classNamePrefix}-user-item`]}
        followButtonClassName={styles[`${classNamePrefix}-user-item-follow`]}
      />
    </div>
  );
};

export default SearchResult;
