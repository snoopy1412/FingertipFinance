import Taro from "@tarojs/taro";
import { StateStorage } from "zustand/middleware";

// 定义 token 的存储键名
export const TOKEN_KEY = "auth_token";

// 定义用户信息的存储键名
export const USER_PROFILE_KEY = "user_profile";

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

// 用于zustand的storage配置，无需修改
export const storage: StateStorage = {
  getItem: (name: string): any => {
    return Taro.getStorageSync(name) || null;
  },
  setItem: (name: string, value: string): void => {
    Taro.setStorageSync(name, value);
  },
  removeItem: (name: string): void => {
    Taro.removeStorageSync(name);
  },
};
