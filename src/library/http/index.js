/*
 * @Author: wy
 * @Date: 2017-12-21 18:55:33
 * @Description: axios 拦截器, 集成 download and retry
 */
import axios from "axios";
import download from "./download";
import retry from "./retry";

// 挂载实例方法
axios.download = download;

// 定义 http request 拦截器
axios.interceptors.request.use(
  function(request) {
    return request;
  },

  function(error) {
    return Promise.reject(error);
  }
);

// 定义 http response 拦截器
axios.interceptors.response.use(
  function(response) {
    return response;
  },

  function(error) {
    // 超时处理
    if (error.code === "ECONNABORTED") {
      if (!error.config.__isRetryComplete) {
        return retry(error);
      } else {
        return Promise.reject(error);
      }
    }

    // 未知错误
    if (error.response && error.response.status) {
      switch (error.response.status) {
        default:
          window.alert("Uncaught (in promise) Error: Request failed with status code ");
          break;
      }
    } else {
      window.alert("Uncaught (in promise) Error " + error.message);
    }

    return Promise.reject(error);
  }
);

export default axios;
