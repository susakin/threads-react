import request from '@utils/request';

export const getUserActivities = <T, U>(type: string, params: U) => {
  return request<T, U>({
    url: `/activity/user-activities/${type}`,
    method: 'get',
    params,
  });
};

export const getNewActivitiesAfterId = <T, U>(params: U, type: string) => {
  return request<T, U>({
    url: `/activity/new-activities-after-id/${type}`,
    method: 'get',
    params,
  });
};

export const getUnread = <T, U>() => {
  return request<T, U>({
    url: `/activity/unread`,
    method: 'get',
  });
};

export const markAsRead = <T, U>(data: U) => {
  return request<T, U>({
    url: `/activity/mark-as-read`,
    method: 'post',
    data,
  });
};

export const postActivitySummary = <T, U>(code: string, params: U) => {
  return request<T, U>({
    url: `/activity/post/${code}`,
    method: 'get',
    params,
  });
};

export const postActivity = <T, U>(id: string, type: string, params: U) => {
  return request<T, U>({
    url: `/activity/post/${id}/${type}`,
    method: 'get',
    params,
  });
};
