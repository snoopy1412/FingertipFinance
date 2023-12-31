import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { TaroAdapter } from "axios-taro-adapter";
import { authTokenStorage } from "./storage";
import { handleApiResponse } from "./response";
import { encryptSensitiveData } from "./rsaEncryption";
import { BASE_API_URL } from "@/constants/base";

const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  adapter: TaroAdapter, // add this line，添加这一行使用taroAdapter
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = authTokenStorage.getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : undefined;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // 待定
    if (response?.status) {
      //  处理错误,目前只处理了http里面的状态码，未处理自定义code里面的状态码，可自行添加
      handleApiResponse({
        statusCode: response.status,
      });
    }
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export const get = (
  url: string,
  params?: any,
  config?: AxiosRequestConfig<string>
) => {
  return instance.get(url, {
    params: encryptSensitiveData(params),
    ...(config || {}),
  });
};
// 此需要符合form data 的提交格式
export const post = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig<string>
) => {
  const formData = qs.stringify(encryptSensitiveData(data));
  return instance.post(url, formData, config);
};

export const put = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig<string>
) => {
  const formData = qs.stringify(encryptSensitiveData(data));
  return instance.put(url, formData, config);
};
export const del = (
  url: string,
  params?: any,
  config?: AxiosRequestConfig<string>
) => {
  return instance.delete(url, {
    params: encryptSensitiveData(params),
    ...(config || {}),
  });
};

export default instance;
