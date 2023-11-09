import { Button } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { useState } from "react";
import NoAdditionalFeesModal from "./NoAdditionalFeesModal";

import styles from "./NotLoggedIn.module.scss";
import Taro from "@tarojs/taro";

const LoggedInNotUsed = () => {
  const [noAdditionalFeesModalVisible, setNoAdditionalFeesModalVisible] =
    useState(false);
  // 跳转到登录页面
  const handleNoAdditionalFeesOk = () => {
    Taro.navigateTo({
      url: "/packages/complete-profile/index",
    });
    setNoAdditionalFeesModalVisible(false);
  };

  return (
    <>
      <NoAdditionalFeesModal
        open={noAdditionalFeesModalVisible}
        content="业务未与任何中介机构合作，除向用户收取正常的贷款利息外，绝无任何附加费用！"
        onCancel={() => setNoAdditionalFeesModalVisible(false)}
        onOk={handleNoAdditionalFeesOk}
      />

      <View className={styles.container}>
        <Button
          shape="round"
          type="primary"
          size="large"
          className={styles.button}
          onClick={() => setNoAdditionalFeesModalVisible(true)}
        >
          立即申请
        </Button>
      </View>
    </>
  );
};
export default LoggedInNotUsed;
