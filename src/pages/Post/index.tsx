import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  PostList,
  PageContainer,
  AccessError,
  RequestType,
  LoadingContainer,
  PostActivityModal,
} from '@pages/components';
import { Spin, Button } from '@components/index';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getPostDetail,
  getPostReply,
  getPostReplyAfterId,
} from '@services/post';
import { useFetch } from '@hooks/useFetch';
import { uniqueId } from 'lodash';
import styles from './index.module.less';
import { useTitle } from '@hooks/useTitle';
import useCacheState from '@hooks/useCacheState';
import { ActionRefType } from '@pages/components/List';
import { Direction } from '@components/Icon';
import { Post as PostItem } from '@typings/index';
import { useHistoryStack } from '@hooks/useHistoryStack';

type Params = {
  code: string;
};

const classNamePrefix = 'post';

const Post: React.FC = () => {
  const { code } = useParams<Params>();
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useCacheState<any>(undefined, `${code}-detail`);
  const [visible, setVisible] = useState<boolean>(false);

  const { loading, run } = useFetch(getPostDetail<any>, {
    manual: true,
    onSuccess(data) {
      setPosts(data);
      setError(!data.length);
    },
    onError() {
      setError(true);
    },
  });

  const firstPost = posts?.[0];
  const [fetchEnd, setFetchEnd] = useState<boolean>(false);
  const [hasFirstReply, setHasFirstReply] = useState<boolean>(false);
  const actionRef = useRef<ActionRefType>(null);
  const lastPostIdRef = useRef<string>();
  const [lastPost, setLastPost] = useState<PostItem>();
  const navigate = useNavigate();
  const historyStack = useHistoryStack();

  useLayoutEffect(() => {
    if (!posts) {
      setLastPost(null as any);
      setFetchEnd(false);
      run(code as string);
    } else {
      setError(!posts?.length);
    }
  }, [code, posts]);

  const postDeatil = useMemo(() => {
    return [
      {
        id: uniqueId(),
        posts,
      },
    ];
  }, [posts]);

  const fetchPostReply: RequestType = async ({
    page,
    pageSize,
    id,
    excludePostCode,
  }) => {
    const {
      code: _code,
      msg,
      data,
    } = await getPostReply<any, any>(id, {
      page,
      pageSize,
      excludePostCode,
    });

    return {
      success: _code == 200,
      msg,
      data: (data?.posts || []).map((posts: any) => {
        return {
          id: uniqueId(),
          posts,
        };
      }),
      total: data?.total,
    };
  };

  const lastPostId = useMemo(() => {
    return {
      id: lastPost?.id,
    };
  }, [lastPost?.id]);

  const firstPostId = useMemo(() => {
    return { id: firstPost?.id, excludePostCode: code };
  }, [firstPost?.id]);

  const { setTitle } = useTitle();

  setTitle(
    firstPost
      ? `@${firstPost?.user?.username || ''} • ${firstPost?.caption || '帖子'}`
      : '',
  );

  const { run: _getPostReplyAfterId, loading: fetchReplyLoading } = useFetch(
    getPostReplyAfterId,
    {
      manual: true,
      onSuccess(data: any) {
        actionRef?.current?.appendData?.(
          (data?.posts || []).map((posts: any) => {
            return {
              id: uniqueId(),
              posts,
            };
          }),
        );
      },
    },
  );

  const hasActivity =
    (lastPost?.repostCount || 0) > 0 ||
    (lastPost?.likeCount || 0) > 0 ||
    (lastPost?.commentCount || 0) > 0;

  return (
    <PageContainer>
      <div className={styles[`${classNamePrefix}`]}>
        <LoadingContainer loading={fetchReplyLoading}>
          {loading ? (
            <Spin spinning={true} height={150} />
          ) : error ? (
            <AccessError />
          ) : (
            <>
              <PostList
                hasPaddingTop={false}
                data={postDeatil}
                lastChildLineType="none"
                lastChildHasSummaryUserPreview={false}
                ignoreMutingUser={false}
                indent
                hasPin={true}
                onDelete={id => {
                  if (id === firstPost?.id) {
                    if (historyStack.length > 0) {
                      navigate(-1);
                    } else {
                      navigate('/');
                    }
                  }
                }}
                pinToWhere="profile"
                onDataChange={data => {
                  const posts = data[data?.length - 1]?.posts;
                  const post = posts?.[posts?.length - 1];
                  setLastPost(post?.code === code ? post : firstPost);
                }}
                onCommentCountClick={() => {
                  if (lastPostId?.id && fetchEnd) {
                    _getPostReplyAfterId(lastPostId?.id, {
                      pageSize: 5,
                      replyId: lastPostIdRef.current,
                    });
                  }
                }}
                actionRef={actionRef}
              />
              {hasActivity && (
                <div className={styles[`${classNamePrefix}-activity`]}>
                  {(lastPost?.commentCount || 0) > 0 && (
                    <div className={styles[`${classNamePrefix}-activity-text`]}>
                      回复
                    </div>
                  )}
                  <Button
                    type="text"
                    className={styles[`${classNamePrefix}-activity-button`]}
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    查看动态
                    <Direction
                      viewBox="0 0 24 24"
                      size={12}
                      style={{ marginLeft: 4, transform: 'rotate(180deg)' }}
                    />
                  </Button>
                </div>
              )}
              {lastPostId?.id && (
                <PostList
                  pinToWhere="comment"
                  ignoreMutingUser={false}
                  hasPin={
                    firstPost?.user?.friendshipStatus?.isOwn &&
                    firstPost?.id === lastPostId?.id
                  }
                  hasPinSign={true}
                  key={lastPostId?.id}
                  replyToPostId={firstPost?.id}
                  params={lastPostId}
                  request={fetchPostReply}
                  actionRef={actionRef}
                  cacheKey={`${lastPostId?.id}-${code}-last-post-reply`}
                  onFetchEnd={() => {
                    setFetchEnd(true);
                  }}
                  onDataChange={data => {
                    lastPostIdRef.current = data
                      ? data?.[data?.length - 1]?.posts?.[0]?.id
                      : undefined;
                  }}
                  indent
                  hasBorderTop
                />
              )}
              {posts?.length > 1 &&
                firstPostId?.id !== lastPostId?.id &&
                firstPost &&
                fetchEnd && (
                  <>
                    {hasFirstReply && (
                      <div className={styles[`${classNamePrefix}-split`]}>
                        发给 {firstPost?.user?.username} 的更多回复
                      </div>
                    )}
                    <PostList
                      onDataChange={data => {
                        setHasFirstReply(!!data.length);
                      }}
                      key={`${firstPostId?.id}-${code}`}
                      pinToWhere="comment"
                      hasPin={firstPost?.user?.friendshipStatus?.isOwn}
                      hasPinSign={true}
                      replyToPostId={firstPostId?.id}
                      params={firstPostId}
                      cacheKey={`${firstPostId?.id}-${code}-first-post-reply`}
                      request={fetchPostReply}
                      ignoreMutingUser={false}
                      indent
                    />
                  </>
                )}
            </>
          )}
        </LoadingContainer>
        <PostActivityModal
          post={lastPost}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </div>
    </PageContainer>
  );
};

export default Post;
