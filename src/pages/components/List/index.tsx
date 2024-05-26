import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useImperativeHandle,
  useRef,
  useMemo,
} from 'react';
import { PreloadWithObserver } from '@components/index';
import LoadingContainer from '../LoadingContainer';
import Toast from '@components/Toast';
import styles from './index.module.less';
import { useDebounceFn, useUpdateEffect } from 'ahooks';
import useCacheState from '@hooks/useCacheState';

export type Pagination = {
  page?: number;
  pageSize: number;
};

type ListItem = {
  id: string;
  [key: string]: any; // 使用索引签名定义其他任意属性
};

type RequestParams<T> = Pagination & T;

export type RequestType<
  T extends ListItem = any,
  U extends Record<string, any> = any,
> = (
  params: RequestParams<U>,
) => Promise<{ data: T[]; total?: number; success?: boolean; msg?: string }>;

export type ActionRefType<T extends ListItem = any> = {
  appendData: (data: T[]) => void;
  prependData: (data: T[]) => void;
  updateData: (filter: (data: T[]) => T[]) => void;
  reload?: (useLoadingContainer?: boolean) => void;
};

type ChildrenProps<T> = {
  data: T[];
  itemFieldUpdate: (itemId: string, updatedField: Partial<T>) => void;
  deleteItem: (itemId: string) => void;
  updateData: (filter: (data: T[]) => T[]) => void;
};

export type ListProps<T extends ListItem, U extends Record<string, any>> = {
  request?: RequestType<T, U>;
  params?: U;
  pageSize?: number;
  ignoreErrorMsg?: boolean;
  emptyPlaceholder?: React.ReactNode;
  onDataChange?: (data: T[]) => void;
  data?: T[];
  children?: (props: ChildrenProps<T>) => React.ReactNode;
  actionRef?: React.RefObject<ActionRefType<T>>;
  onFetchEnd?: () => void;
  debounceWait?: number;
  cacheKey?: string;
  spin?: React.ReactNode | ((dataLengths: number) => React.ReactNode);
  hasLoadingContainer?: boolean;
};

const classNamePrefix = 'list';

function List<T extends ListItem, U extends Record<string, any>>({
  params,
  request,
  children,
  pageSize = 5,
  ignoreErrorMsg,
  emptyPlaceholder,
  onDataChange,
  actionRef,
  onFetchEnd,
  debounceWait = 0,
  cacheKey,
  spin,
  hasLoadingContainer = false,
  ...rest
}: ListProps<T, U>) {
  const useLoadingContainerRef = useRef<boolean>(false);
  const [data, setData] = useCacheState<T[]>(
    rest?.data || [],
    cacheKey ? `${cacheKey}-data` : '',
  );
  const [key, setKey] = useState<number | undefined>(undefined);
  const pageRef = useRef<number>(1);
  const [paginationState, setPaginationState] = useCacheState(
    {
      total: 0,
      pageSize: 1,
      isFetched: false,
      loading: true,
    },
    cacheKey ? `${cacheKey}-pagination` : '',
  );

  useLayoutEffect(() => {
    pageRef.current = paginationState.pageSize;
  }, [paginationState]);

  useUpdateEffect(() => {
    rest?.data && setData(rest?.data);
  }, [rest.data]);

  const loadData = async () => {
    setPaginationState(prevState => ({ ...prevState, loading: true }));
    try {
      if (request) {
        const { success, data, msg, total } = await request({
          page: pageRef.current,
          pageSize,
          ...params,
        } as RequestParams<U>);
        if (success) {
          setData(prevData => {
            const useLoadingContainer = useLoadingContainerRef.current;
            useLoadingContainerRef.current = false;
            return [...(useLoadingContainer ? [] : prevData), ...data];
          });
          setPaginationState(prevState => ({
            ...prevState,
            total: total as number,
            pageSize: prevState.pageSize + 1,
            isFetched: true,
            loading: false,
          }));
          data.length && setKey(Date.now());
        } else {
          !ignoreErrorMsg && Toast.show(msg as string);
          setPaginationState(prevState => ({
            ...prevState,
            loading: false,
          }));
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        !ignoreErrorMsg && Toast.show(error?.message);
      }
      useLoadingContainerRef.current = false;
      setPaginationState(prevState => ({
        ...prevState,
        isFetched: true,
        loading: false,
      }));
    }
  };

  const itemFieldUpdate = (
    itemId: string,
    updatedField: Partial<Omit<T, 'id'>>,
  ) => {
    // 找到需要修改的item
    setData(data =>
      data.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            ...updatedField, // 进行字段更新
          };
        }
        return item;
      }),
    );
  };

  const updateData = (filter: (data: T[]) => T[]) => {
    setData(data => filter(data));
  };

  const deleteItem = (itemId: string) => {
    setData(v => v.filter(item => item.id !== itemId));
    setPaginationState(v => ({ ...v, total: v.total - 1 }));
  };

  useUpdateEffect(() => {
    setPaginationState(prevState => ({
      ...prevState,
      total: 0,
      pageSize: 1,
      isFetched: false,
      loading: true,
    }));
    setData([]);
    setKey(Date.now());
  }, [params]);

  useLayoutEffect(() => {
    onDataChange?.(data);
  }, [data]);

  const length = data?.length;

  useImperativeHandle(actionRef, () => {
    return {
      appendData(data) {
        setData(v => [...v, ...data]);
        setPaginationState(v => ({ ...v, total: v.total + data?.length }));
      },
      prependData(data) {
        setData(v => [...data, ...v]);
        setPaginationState(v => ({ ...v, total: v.total + data?.length }));
      },
      updateData,
      reload(useLoadingContainer) {
        if (useLoadingContainerRef.current || paginationState.loading) return;
        useLoadingContainerRef.current = !!useLoadingContainer;
        !useLoadingContainer && setData([]);
        //pageRef.current = 1;
        setPaginationState({
          total: 0,
          isFetched: false,
          pageSize: 1,
          loading: true,
        });
        useLoadingContainer && setTimeout(run);
      },
    };
  });

  useEffect(() => {
    if (
      paginationState?.isFetched &&
      data?.length >= (paginationState?.total || 0)
    ) {
      onFetchEnd?.();
    }
  }, [data, paginationState]);

  const { run } = useDebounceFn(loadData, {
    wait: debounceWait,
    leading: true,
  });
  const Container: any = hasLoadingContainer
    ? LoadingContainer
    : React.Fragment;

  const _spin = useMemo(() => {
    return typeof spin === 'function' ? spin(data?.length) : spin;
  }, [data?.length]);

  return (
    <Container
      loading={paginationState?.loading && useLoadingContainerRef.current}
    >
      {children?.({
        data,
        itemFieldUpdate,
        deleteItem,
        updateData,
      })}
      <PreloadWithObserver
        key={key}
        spin={_spin}
        onLoad={run as any}
        visible={
          ((length && length < paginationState?.total) ||
            (!paginationState?.isFetched &&
              typeof rest?.data === 'undefined')) &&
          !useLoadingContainerRef.current
        }
      />
      {!paginationState?.loading &&
        typeof emptyPlaceholder !== 'undefined' &&
        length === 0 && (
          <div className={styles[`${classNamePrefix}-empty`]}>
            {emptyPlaceholder}
          </div>
        )}
    </Container>
  );
}

export default List;
