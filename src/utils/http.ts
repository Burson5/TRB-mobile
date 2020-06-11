import apiConfig from '~/configs/api';
import { ConstValues } from '~/utils';
import axios from 'axios';

let apiUrl = apiConfig.host;

// 创建axios实例
export const http = axios.create({
  timeout: 1000 * 60 * 3,
  baseURL: `${apiUrl}/`,
});

http.interceptors.request.use(
  (config) => {
    // 增加固定请求参数
    let data = config.data;

    data = {
      ...data,
    };

    console.log('-----Http request-----');
    console.info(config.url);
    console.info(JSON.stringify(data));

    config.data = {
      data: data,
    };

    config.headers['content-type'] = 'application/json;charset=utf-8';
    // 增加请求头
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    // 拦截错误
    console.error(error);
    const err = {
      ...error,
      ...error.response,
      // 返回接口返回的错误信息 报错
      ...{ msg: ConstValues.httpErrorMessages.NETERROR },
    };
    return Promise.reject(err); //
  }
);
