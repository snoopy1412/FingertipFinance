import { View, Image } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import loginBg from "@/assets/loginBg.jpg";

import styles from "./index.module.scss";

const Login = () => {
  return (
    <View className={styles.login}>
      <View className={styles.loginContainer}>
        <Image src={loginBg} className={styles.loginBg}></Image>
      </View>
      <View className={styles.buttonContainer}>
        <Button className={styles.loginButton} type="primary">
          授权登录
        </Button>
      </View>
    </View>
  );
};

export default Login;
