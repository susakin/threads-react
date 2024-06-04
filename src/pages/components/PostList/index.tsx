import React from 'react';
import CombinedPost, { CombinedPostProps } from '../CombinedPost';
import { HidableComponent } from '@components/index';
import List, { ListProps } from '../List';
import styles from './index.module.less';
import cs from 'classnames';
import { CombinedPost as CombinedPostItem } from '@typings/index';
import { PostHeaderActionProps } from '../PostHeader/PostHeaderAction';

const classNamePrefix = 'post-list';

type PostListProps = {
  className?: string;
  lastChildLineType?: 'none' | 'transparent';
  hasPinSign?: boolean;
  randomRender?: (index: number) => React.ReactNode;
} & Pick<PostHeaderActionProps, 'pinToWhere'> &
  Pick<
    CombinedPostProps,
    | 'hasBorderTop'
    | 'hasPaddingTop'
    | 'indent'
    | 'hasReplyTo'
    | 'ignoreUnavailablePost'
    | 'indentWhenTransparentLine'
    | 'replyToPostId'
    | 'lastChildHasSummaryUserPreview'
    | 'ignoreMutingUser'
    | 'hasPin'
    | 'hasPinSign'
    | 'hasFirstSign'
    | 'hasRepostSign'
    | 'onCommentCountClick'
    | 'onReply'
    | 'onPostSuccess'
    | 'onUsernameClick'
  >;

function PostList<T extends Record<string, any>>({
  className,
  hasPin,
  lastChildLineType,
  lastChildHasSummaryUserPreview,
  hasBorderTop = false,
  hasPaddingTop = true,
  indent,
  hasReplyTo,
  indentWhenTransparentLine,
  ignoreUnavailablePost,
  pinToWhere,
  replyToPostId,
  hasPinSign,
  ignoreMutingUser = true,
  randomRender,
  onCommentCountClick,
  onReply,
  onPostSuccess,
  hasRepostSign,
  hasFirstSign,
  onUsernameClick,
  ...rest
}: PostListProps & ListProps<CombinedPostItem, T>) {
  return (
    <div className={cs(styles[`${classNamePrefix}`], className)}>
      <List<CombinedPostItem, T> {...rest}>
        {({ data, deleteItem, itemFieldUpdate, updateData }) => {
          const pinToProfile = pinToWhere === 'profile';

          return (
            <>
              {data?.map((item, index) => {
                const isFirst = index === 0;
                return (
                  <HidableComponent key={item?.id}>
                    {randomRender?.(index)}
                    <CombinedPost
                      onCommentCountClick={onCommentCountClick}
                      ignoreUnavailablePost={ignoreUnavailablePost}
                      indent={indent}
                      hasPaddingTop={hasPaddingTop}
                      hasReplyTo={hasReplyTo}
                      hasFirstSign={hasFirstSign}
                      hasRepostSign={hasRepostSign}
                      replyToPostId={replyToPostId}
                      lastChildLineType={lastChildLineType}
                      ignoreMutingUser={ignoreMutingUser}
                      indentWhenTransparentLine={indentWhenTransparentLine}
                      onUsernameClick={onUsernameClick}
                      lastChildHasSummaryUserPreview={
                        lastChildHasSummaryUserPreview
                      }
                      onReply={(id, _post) => {
                        onReply?.(id, _post);
                        updateData(data => {
                          return data.map(item => {
                            const posts: any[] = [];
                            const len = item.posts?.length || 0;
                            for (let i = 0; i < len; i++) {
                              const post = item.posts?.[i];
                              const isEqual = post?.id === id;
                              if (isEqual) {
                                post.commentCount =
                                  (post.commentCount || 0) + 1;
                                if (
                                  (post.replyUsersProfilePicUrl?.length || 0) <
                                    3 &&
                                  post.replyUsersProfilePicUrl?.every(
                                    url => url !== _post?.user?.profilePicUrl,
                                  )
                                ) {
                                  post.replyUsersProfilePicUrl = [
                                    ...(post.replyUsersProfilePicUrl || []),
                                    _post?.user?.profilePicUrl || '',
                                  ];
                                }
                              }
                              posts.push(post);
                              if (isEqual) {
                                len - 1 === i && posts.push(_post);
                                break;
                              }
                            }
                            return {
                              ...item,
                              posts,
                            };
                          });
                        });
                      }}
                      combinedPost={item}
                      pinToWhere={pinToWhere}
                      hasPinSign={hasPinSign}
                      hasPin={hasPin}
                      hasBorderTop={!!index || (isFirst && hasBorderTop)}
                      onUserFriendshipStatusUpdate={(uid, friendshipStatus) => {
                        updateData(data => {
                          return data.map(item => {
                            return {
                              ...item,
                              posts: item.posts?.map(post => {
                                if (post?.uid === uid) {
                                  return {
                                    ...post,
                                    user: {
                                      ...post.user,
                                      friendshipStatus: {
                                        ...post.user.friendshipStatus,
                                        ...friendshipStatus,
                                      },
                                    },
                                  };
                                }
                                return post;
                              }),
                            };
                          });
                        });
                      }}
                      onDelete={id => {
                        if ((item.posts?.length || 0) > 1) {
                          itemFieldUpdate(item?.id, {
                            ...item,
                            posts: item.posts?.filter(
                              post => !post.replyToUid && post?.id !== id,
                            ),
                          });
                        } else {
                          deleteItem(item?.id);
                        }
                      }}
                      onPinChange={(id, pinned) => {
                        const key = pinToProfile
                          ? 'isPinnedToProfile'
                          : 'isPinnedToComment';
                        updateData(data => {
                          if (!pinned) {
                            return data.map(item => {
                              return {
                                ...item,
                                posts: item.posts?.map(post => {
                                  if (post?.id === id) {
                                    return {
                                      ...post,
                                      [key]: false,
                                    };
                                  }
                                  return post;
                                }),
                              };
                            });
                          } else {
                            if (data[0]?.posts?.[0]) {
                              data[0].posts[0][key] = false;
                            }
                            const index = data?.findIndex(
                              item =>
                                item?.posts?.some(post => post?.id === id),
                            );
                            if (typeof index !== 'undefined' && index > -1) {
                              /* eslint-disable-next-line no-unsafe-optional-chaining */
                              const [removed]: any = data.splice(index, 1);
                              if (removed) {
                                removed.posts[0][key] = true;
                                data.unshift(removed);
                              }
                            }
                            return [...data];
                          }
                        });
                      }}
                      onFollowingChange={(
                        uid,
                        { following, outgoingRequest },
                      ) => {
                        updateData(data => {
                          return data.map(item => {
                            return {
                              ...item,
                              posts: item?.posts?.map(post => {
                                if (post?.uid === uid) {
                                  following !== undefined &&
                                    (post.user.friendshipStatus.following =
                                      following);
                                  outgoingRequest !== undefined &&
                                    (post.user.friendshipStatus.outgoingRequest =
                                      outgoingRequest);
                                }
                                if (post?.quotedPost?.uid === uid) {
                                  following !== undefined &&
                                    (post.quotedPost.user.friendshipStatus.following =
                                      following);
                                  outgoingRequest !== undefined &&
                                    (post.quotedPost.user.friendshipStatus.outgoingRequest =
                                      outgoingRequest);
                                }
                                return post;
                              }),
                            };
                          });
                        });
                      }}
                      onPostUpdate={(id, updateFiled) => {
                        itemFieldUpdate(item?.id, {
                          ...item,
                          posts: item.posts?.map(post => {
                            if (post?.id === id) {
                              return {
                                ...post,
                                ...updateFiled,
                              };
                            }
                            return post;
                          }),
                        });
                      }}
                      onPostSuccess={onPostSuccess}
                    />
                  </HidableComponent>
                );
              })}
            </>
          );
        }}
      </List>
    </div>
  );
}

export default PostList;
