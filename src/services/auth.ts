import request from '@utils/request';

export const getUser = <T>() => {
  return request<T>({
    url: '/auth/user',
    method: 'get',
  });
};

export const login = <T, U>(data: U) => {
  return request<T, U>({
    url: '/auth/login',
    data,
    method: 'post',
  });
};

export const logout = () => {
  return request({
    url: '/auth/logout',
    method: 'post',
  });
};
