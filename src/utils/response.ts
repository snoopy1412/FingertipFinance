import Taro from "@tarojs/taro";
import { USER_PROFILE_KEY, authTokenStorage } from "./storage";

interface IApiResponse {
  statusCode: number;
  message?: string;
}
export const handleApiResponse = ({ statusCode, message }: IApiResponse) => {
  switch (statusCode) {
    case 401:
      Taro.showToast({
        title: message || "登录失效",
        icon: "none",
        duration: 1000,
      })?.then(() => {
        // 清除过期的token
        authTokenStorage.removeToken();
        // 清除过期的用户信息
        Taro.removeStorageSync(USER_PROFILE_KEY);
        Taro.navigateTo({
          url: "/pages/login/index",
        });
      });
      break;
    case 403:
      Taro.showToast({
        title: message || "无权限",
        icon: "none",
        duration: 1000,
      });
      break;
    case 404:
      Taro.showToast({
        title: message || "接口不存在",
        icon: "none",
        duration: 1000,
      });
      break;
    case 500:
    case 502:
    case 503:
      Taro.showToast({
        title: message || "服务器错误",
        icon: "none",
        duration: 1000,
      });
      break;
    default:
      message &&
        Taro.showToast({
          title: message,
          icon: "none",
          duration: 1000,
        });

      break;
  }
};
