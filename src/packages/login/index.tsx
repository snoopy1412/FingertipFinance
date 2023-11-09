import { View, Image, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import loginBg from "@/assets/loginBg.jpg";
import { useRequest } from "ahooks";
import styles from "./index.module.scss";
import Taro from "@tarojs/taro";
import { postLoginByOpenid, postGetWxSession } from "@/api/login";
import { STATUS_CODE } from "@/constants/response";
import { authTokenStorage } from "@/utils/storage";
import { userStore } from "@/store/user";
import { useState } from "react";

const Login = () => {
  const { setUserProfile } = userStore();
  const [loading, setLoading] = useState(false);
  const { runAsync: fetchWxSession } = useRequest(postGetWxSession, {
    manual: true,
  });
  const { runAsync: fetchLogin } = useRequest(postLoginByOpenid, {
    manual: true,
  });

  // 此代码未必准确，请斟酌
  const handleLogin = async () => {
    setLoading(true);
    const loginRes = await Taro.login();
    if (loginRes?.code) {
      const sessionRes = await fetchWxSession({ code: loginRes?.code });
      if (sessionRes?.data?.code === STATUS_CODE?.SUCCESS) {
        const openid = sessionRes?.data?.data?.openid;
        const loginRes = await fetchLogin({ openid });
        if (loginRes?.data?.code === STATUS_CODE?.SUCCESS) {
          // 储存token的值到本地
          authTokenStorage.setToken(loginRes?.data?.data?.token);
          // 储存用户信息到状态管理
          setUserProfile(loginRes?.data?.data?.userInfo);
          // 跳转到首页（待定）
          Taro.switchTab({
            url: "/pages/index/index",
          });
          return;
        }
      }
    }
    setLoading(false);
    // 否则提示登录失败
    Taro.showToast({
      title: "登录失败",
      icon: "none",
    });
  };
  return (
    <View className={styles.login}>
      <View className={styles.loginContainer}>
        <Image src={loginBg} className={styles.loginBg}></Image>
        <View className={styles.text}>
          <Text className={styles.textInner}>东方指尖贷</Text>
        </View>
      </View>
      <View className={styles.buttonContainer}>
        <Button
          className={styles.loginButton}
          type="primary"
          loading={loading}
          onClick={handleLogin}
        >
          授权登录
        </Button>
      </View>
    </View>
  );
};

export default Login;
