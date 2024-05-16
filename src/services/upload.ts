import request from '@utils/request';

export const upload = (data: FormData) => {
  return request({
    url: '/upload',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
};
