import Taro from "@tarojs/taro";
import { useEffect } from "react";

const useLoading = (loading) => {
  useEffect(() => {
    if (loading) {
      Taro.showLoading({
        title: "加载中...",
        mask: true,
      });
    } else {
      Taro.hideLoading();
    }
    return () => {
      Taro.hideLoading();
    };
  }, [loading]);
};

export default useLoading;
