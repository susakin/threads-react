import { User } from '@typings/index';
import request from '@utils/request';
import { Pagination } from '@pages/components/List';

export const getUserByUsername = <T, U>(username: string) => {
  return request<T, U>({
    url: `user/username/${username}`,
    method: 'get',
  });
};

export const updateUser = <T>(updatedFields: Partial<User>) => {
  return request<T, Partial<User>>({
    url: `user`,
    method: 'patch',
    data: updatedFields,
  });
};

export const deleteUser = <T>(password: string) => {
  return request<T, { password: string }>({
    url: `user`,
    method: 'delete',
    data: { password },
  });
};

export const follow = (id: string) => {
  return request({
    url: `user-relation/follow/${id}`,
    method: 'post',
  });
};

export const deleteFollow = (id: string) => {
  return request({
    url: `user-relation/follow/${id}`,
    method: 'delete',
  });
};

export const unfollow = (id: string) => {
  return request({
    url: `user-relation/unfollow/${id}`,
    method: 'post',
  });
};

export const unblock = (id: string) => {
  return request({
    url: `user-relation/unblock/${id}`,
    method: 'post',
  });
};

export const block = (id: string) => {
  return request({
    url: `user-relation/block/${id}`,
    method: 'post',
  });
};

export const unrestricte = (id: string) => {
  return request({
    url: `user-relation/unrestricte/${id}`,
    method: 'post',
  });
};

export const restricte = (id: string) => {
  return request({
    url: `user-relation/restricte/${id}`,
    method: 'post',
  });
};

export const followRequest = (id: string) => {
  return request({
    url: `user-relation/follow-request/${id}`,
    method: 'post',
  });
};

export const unfollowRequest = (id: string) => {
  return request({
    url: `user-relation/unfollow-request/${id}`,
    method: 'post',
  });
};

export const getFollower = (id: string, params: Pagination) => {
  return request({
    url: `user-relation/follower/${id}`,
    method: 'get',
    params,
  });
};

export const getFollowing = (id: string, params: Pagination) => {
  return request({
    url: `user-relation/following/${id}`,
    method: 'get',
    params,
  });
};
