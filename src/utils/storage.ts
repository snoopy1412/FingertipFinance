import Taro from "@tarojs/taro";

// 定义 token 的存储键名
const TOKEN_KEY = "auth_token";

export const authTokenStorage = {
  // 从存储中获取 token
  getToken() {
    return Taro.getStorageSync(TOKEN_KEY);
  },
  // 将 token 保存到存储中
  setToken(token: string) {
    Taro.setStorageSync(TOKEN_KEY, token);
  },
  // 从存储中移除 token
  removeToken() {
    Taro.removeStorageSync(TOKEN_KEY);
  },
};
