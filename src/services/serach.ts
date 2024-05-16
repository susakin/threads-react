import request from '@utils/request';

export const getRecommendedUsers = <T, U>(params: U) => {
  return request<T, U>({
    url: `/user/recommended-users`,
    method: 'get',
    params,
  });
};

export const getUsersByQuery = <T, U>(params: U) => {
  return request<T, U>({
    url: `/user`,
    method: 'get',
    params,
  });
};
