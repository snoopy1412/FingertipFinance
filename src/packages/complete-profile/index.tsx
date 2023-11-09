/**
 * @name 个人信息完善
 */

import { View, Text } from "@tarojs/components";
import UploadIdCard from "./UploadIdCard";
import styles from "./index.module.scss";

const CompleteProfile = () => {
  return (
    <View>
      <View className={styles.section}>
        <View>请上传身份证的正反面</View>
        <UploadIdCard />
      </View>

      <View className={styles.section}>
        <View>请完善您的个人信息</View>
      </View>
    </View>
  );
};
export default CompleteProfile;
