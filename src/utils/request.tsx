import axios, { AxiosRequestConfig } from 'axios';
import localforage from 'localforage';

export type Response<T = any> = {
  code: number;
  msg: string;
  data: T;
};

// 创建axios实例
const instance = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 60000, // 请求超时时间
});

// request拦截器
instance.interceptors.request.use(
  async config => {
    const token = await localforage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // 将token添加到请求头中
    }
    return config;
  },
  error => {
    // Do something with request error
    //console.log(error); // for debug
    Promise.reject(error);
  },
);

// response 拦截器
instance.interceptors.response.use(null, error => {
  console.log(error); // for debug
  //alert(error.message)

  return Promise.reject(error);
});

export async function request<T = any, U = any>(
  config: AxiosRequestConfig<U>,
): Promise<Response<T>> {
  try {
    const res = await instance.request<Response<T>>(config);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default request;
