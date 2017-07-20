/**
 * Created by zyzhang on 17/7/11.
 */
import axios from 'axios';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // console.log('request拦截器:', config);
  return config;
}, error => {
  // console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(resopnse => {
  // console.log('respone拦截器:', resopnse); // for debug
  return resopnse;
}, error => {
  // console.log(error); // for debug
  return Promise.reject(error)
})

export default service;
