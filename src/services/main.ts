import request from '@utils/request';

export const getTimeline = <T, U>(params: U) => {
  return request<T>({
    url: '/post/timeline',
    method: 'get',
    params,
  });
};

export const getTimelineAfterId = <T, U>(id: string, params: U) => {
  return request<T>({
    url: `/post/timeline-after-id/${id}`,
    method: 'get',
    params,
  });
};

export const getFollowingPostsAfterId = <T, U>(id: string, params: U) => {
  return request<T>({
    url: `/post/following-posts-after-id/${id}`,
    method: 'get',
    params,
  });
};

export const getFollowingPosts = <T, U>(params: U) => {
  return request<T>({
    url: '/post/following-posts',
    method: 'get',
    params,
  });
};
