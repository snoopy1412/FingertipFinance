import { Button } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { useState } from "react";
import PrivacyProtectionGuide from "./PrivacyProtectionGuide";

import styles from "./NotLoggedIn.module.scss";
import Taro from "@tarojs/taro";

const NotLoggedIn = () => {
  const [privacyProtectionGuideVisible, setPrivacyProtectionGuideVisible] =
    useState(false);

  // 跳转到登录页面
  const handlePrivacyProtectionGuideOk = () => {
    Taro.navigateTo({
      url: "/packages/login/index",
    });
    setPrivacyProtectionGuideVisible(false);
  };

  return (
    <>
      <PrivacyProtectionGuide
        open={privacyProtectionGuideVisible}
        onCancel={() => setPrivacyProtectionGuideVisible(false)}
        onOk={handlePrivacyProtectionGuideOk}
      />
      <View className={styles.container}>
        <Button
          shape="round"
          type="primary"
          size="large"
          className={styles.button}
          onClick={() => setPrivacyProtectionGuideVisible(true)}
        >
          立即申请
        </Button>
      </View>
    </>
  );
};
export default NotLoggedIn;
