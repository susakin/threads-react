import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Tabs, Button } from '@components/index';
import { PostList, RequestType, PostEditModal } from '@pages/components';
import { getUserPost, getUserReplies, getUserRepost } from '@services/post';
import { uniqueId } from 'lodash';
import { User } from '@typings/index';
import { useNavigate } from 'react-router-dom';
import styles from './profilePosts.module.less';
import { ActionRefType } from '@pages/components/List';
import { NavigationContext } from '@context/NavigationProvider';

type ProfilePostsProps = {
  isBanned?: boolean;
  user: User;
  activeKey?: string;
  onUserFieldUpdate?: (user: Partial<User>) => void;
};

const classNamePrefix = 'profile-posts';

const ProfilePosts: React.FC<ProfilePostsProps> = ({
  user,
  activeKey,
  onUserFieldUpdate,
  isBanned,
}) => {
  const postListRef = useRef<ActionRefType>(null);
  const replyListRef = useRef<ActionRefType>(null);
  const repostListRef = useRef<ActionRefType>(null);
  const { state } = useContext(NavigationContext);
  const { navigationEmitter } = state;

  const params = useMemo(() => {
    return { uid: user?.id };
  }, [user?.id]);

  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  const fetchUserPost: RequestType = async ({ page, pageSize, uid }) => {
    const { code, data, msg }: any = await getUserPost(uid, {
      page,
      pageSize,
    });

    return {
      success: code === 200,
      msg,
      data:
        data?.posts?.map((posts: any) => {
          return {
            id: uniqueId(),
            posts,
          };
        }) || [],
      total: data?.total,
    };
  };

  const fetchUserReplies: RequestType = async ({ page, pageSize, uid }) => {
    const { code, data, msg }: any = await getUserReplies(uid, {
      page,
      pageSize,
    });

    return {
      success: code === 200,
      msg,
      data:
        data?.posts?.map((posts: any) => {
          return {
            id: uniqueId(),
            posts,
          };
        }) || [],
      total: data?.total,
    };
  };

  const fetchUserRepost: RequestType = async ({ page, pageSize, uid }) => {
    const { code, data, msg }: any = await getUserRepost(uid, {
      page,
      pageSize,
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

  const changeUrl = (path: string) => {
    navigate(`/@${user?.username}${path}`, { replace: true });
  };

  function formatPost(postList: any[] = []) {
    return postList.map(item => {
      return {
        ...item,
        posts: item?.posts?.map((post: any) => {
          if (post?.uid === user.id) {
            return {
              ...post,
              user: {
                ...post.user,
                ...user,
              },
            };
          }
          return post;
        }),
      };
    });
  }

  function onUserFieldUpdated(postList: any[] = []) {
    postList.forEach(item => {
      item?.posts?.forEach((post: any) => {
        if (post?.uid === user.id) {
          onUserFieldUpdate?.({
            friendshipStatus: { ...post?.user?.friendshipStatus },
          });
        }
      });
    });
  }

  useEffect(() => {
    postListRef.current?.updateData(formatPost);
    replyListRef.current?.updateData(formatPost);
    repostListRef.current?.updateData(formatPost);
  }, [
    user?.friendshipStatus?.following,
    user?.friendshipStatus?.outgoingRequest,
    user?.friendshipStatus?.muting,
    user?.profilePicUrl,
    user?.biography,
  ]);

  navigationEmitter?.useSubscription(props => {
    props.type === 'newPost' && postListRef.current?.reload?.();
  });

  navigationEmitter?.useSubscription(props => {
    if (props.type !== 'profile') return;
    if (window.scrollY) {
      return window.scrollTo(0, 0);
    }
    postListRef.current?.reload?.(true);
  });

  function onTabTitleClick(key: string) {
    const isCurrentKey = key === activeKey;
    if (isCurrentKey) {
      if (window.scrollY) {
        return window.scrollTo(0, 0);
      }
    }
    switch (key) {
      case '':
        isCurrentKey && postListRef.current?.reload?.(true);
        break;
      case 'replies':
        isCurrentKey && replyListRef.current?.reload?.(true);
        break;
      case 'reposts':
        isCurrentKey && repostListRef.current?.reload?.(true);
        break;
    }
  }

  return (
    <>
      <Tabs
        activeKey={activeKey || ''}
        onChange={key => {
          changeUrl(key ? `/${key}` : '');
        }}
        onTabTitleClick={onTabTitleClick}
        headerClassName={styles[`${classNamePrefix}-header`]}
      >
        <Tabs.Tab title="串文" key="">
          {!isBanned && (
            <PostList
              actionRef={postListRef}
              hasBorderTop={false}
              params={params}
              pinToWhere="profile"
              cacheKey={`${user?.id}-posts`}
              hasPin={true}
              hasPinSign
              hasFirstSign
              indent
              hasLoadingContainer
              request={fetchUserPost}
              onDataChange={onUserFieldUpdated}
              onPostSuccess={() => {
                postListRef.current?.reload?.(true);
              }}
              emptyPlaceholder={
                user?.friendshipStatus?.isOwn ? (
                  <Button
                    className={styles[`${classNamePrefix}-create-post`]}
                    onClick={() => {
                      setVisible(true);
                    }}
                  >
                    发布你的首篇串文
                  </Button>
                ) : (
                  '暂时还没有帖子。'
                )
              }
            />
          )}
        </Tabs.Tab>
        <Tabs.Tab title="回复" key="replies">
          {!isBanned && (
            <PostList
              hasBorderTop={false}
              params={params}
              hasReplyTo
              hasLoadingContainer
              indent
              request={fetchUserReplies}
              onDataChange={onUserFieldUpdated}
              emptyPlaceholder="还没有回复。"
              actionRef={replyListRef}
              cacheKey={`${user?.id}-reply`}
              ignoreUnavailablePost
            />
          )}
        </Tabs.Tab>
        <Tabs.Tab title="转发" key="reposts">
          {!isBanned && (
            <PostList
              hasBorderTop={false}
              params={params}
              hasLoadingContainer
              hasRepostSign
              hasReplyTo
              indent
              cacheKey={`${user?.id}-repost`}
              request={fetchUserRepost}
              onDataChange={onUserFieldUpdated}
              emptyPlaceholder="暂无转发。"
              actionRef={repostListRef}
            />
          )}
        </Tabs.Tab>
      </Tabs>
      <PostEditModal
        visible={visible}
        onSuccess={() => {
          postListRef.current?.reload?.();
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default ProfilePosts;
