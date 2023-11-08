import { View, Image, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import loginBg from "@/assets/loginBg.jpg";

import styles from "./index.module.scss";

const Login = () => {
  return (
    <View className={styles.login}>
      <View className={styles.loginContainer}>
        <Image src={loginBg} className={styles.loginBg}></Image>
        <View className={styles.text}>
          <Text className={styles.textInner}>东方指尖贷</Text>
        </View>
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
