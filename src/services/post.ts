import request from '@utils/request';

export const createPost = <T, U>(data: U) => {
  return request<T, U>({
    url: '/post',
    data,
    method: 'post',
  });
};

export const updatePost = <T, U>(data: U) => {
  return request<T, U>({
    url: `/post/${(data as any)?.id}`,
    data,
    method: 'patch',
  });
};

export const getTags = <T, U>(params: U, text: string) => {
  return request<T, U>({
    url: `/tag/${text}`,
    params,
    method: 'get',
  });
};

export const deletePost = <T>(id: string) => {
  return request<T>({
    url: `post/${id}`,
    method: 'delete',
  });
};

export const postLike = <T>(id: string) => {
  return request<T>({
    url: `like/${id}`,
    method: 'post',
  });
};

export const postUnlike = <T>(id: string) => {
  return request<T>({
    url: `like/${id}`,
    method: 'delete',
  });
};

export const postSave = <T>(id: string) => {
  return request<T>({
    url: `save-post/${id}`,
    method: 'post',
  });
};

export const postUnSave = <T>(id: string) => {
  return request<T>({
    url: `save-post/${id}`,
    method: 'delete',
  });
};

export const repost = <T>(id: string) => {
  return request<T>({
    url: `repost/${id}`,
    method: 'post',
  });
};

export const unrepost = <T>(id: string) => {
  return request<T>({
    url: `repost/${id}`,
    method: 'delete',
  });
};

export const pin = <T>(id: string) => {
  return request<T>({
    url: `post/${id}/pin`,
    method: 'patch',
  });
};

export const unpin = <T>(id: string) => {
  return request<T>({
    url: `post/${id}/unpin`,
    method: 'patch',
  });
};

export const mute = <T>(uid: string) => {
  return request<T>({
    url: `user-relation/mute/${uid}`,
    method: 'post',
  });
};

export const unmute = <T>(uid: string) => {
  return request<T>({
    url: `user-relation/unmute/${uid}`,
    method: 'post',
  });
};

export const pinToComment = <T>(id: string) => {
  return request<T>({
    url: `post/${id}/pin-to-comment`,
    method: 'patch',
  });
};

export const unpinToComment = <T>(id: string) => {
  return request<T>({
    url: `post/${id}/unpin-to-comment`,
    method: 'patch',
  });
};

export const getPostDetail = <T>(id: string) => {
  return request<T>({
    url: `post/detail/${id}`,
    method: 'get',
  });
};

export const getPostReply = <T, U>(id: string, params: U) => {
  return request<T, U>({
    url: `post/replies/${id}`,
    method: 'get',
    params,
  });
};

export const getPostReplyAfterId = <T, U>(id: string, params: U) => {
  return request<T, U>({
    url: `post/reply-after-id/${id}`,
    method: 'get',
    params,
  });
};

export const searchPost = <T, U>(params: U) => {
  return request<T, U>({
    url: `post/search`,
    method: 'get',
    params,
  });
};

export const getUserPost = <T, U>(uid: string, params: U) => {
  return request<T, U>({
    url: `post/user/${uid}`,
    method: 'get',
    params,
  });
};

export const getUserReplies = <T, U>(uid: string, params: U) => {
  return request<T, U>({
    url: `post/replies/uid/${uid}`,
    method: 'get',
    params,
  });
};

export const getUserRepost = <T, U>(uid: string, params: U) => {
  return request<T, U>({
    url: `repost/user/${uid}`,
    method: 'get',
    params,
  });
};

export const getUserLikedPost = <T, U>(params: U) => {
  return request<T, U>({
    url: `like/posts`,
    method: 'get',
    params,
  });
};

export const getUserSavedPost = <T, U>(params: U) => {
  return request<T, U>({
    url: `save-post/posts`,
    method: 'get',
    params,
  });
};

export const hidePost = <T, U>(postId: string) => {
  return request<T, U>({
    url: `hide-post/${postId}`,
    method: 'post',
  });
};

export const revokeHidePost = <T, U>(postId: string) => {
  return request<T, U>({
    url: `hide-post/${postId}`,
    method: 'delete',
  });
};

export const updateLikeAndViewCounts = <T, U>(postId: string, data: U) => {
  return request<T, U>({
    url: `post/${postId}/like-and-view-counts`,
    method: 'patch',
    data,
  });
};

export const updateReplyAuth = <T, U>(postId: string, data: U) => {
  return request<T, U>({
    url: `post/${postId}/reply-auth`,
    method: 'patch',
    data,
  });
};

export const vote = <T, U>(data: U) => {
  return request<T, U>({
    url: `vote`,
    method: 'post',
    data,
  });
};
