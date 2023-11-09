/**
 * @name 个人信息完善
 */

import { View } from "@tarojs/components";
import UploadIdCard from "./UploadIdCard";
import styles from "./index.module.scss";
import ProfileForm from "./ProfileForm";
import { useRef } from "react";
import SubmitButtonFooter from "@/components/SubmitButtonFooter";

const CompleteProfile = () => {
  const ref = useRef<any>();
  const handleFinish = (values) => {
    console.log("values", values);
  };
  return (
    <View className={styles.container}>
      <View className={styles.content}>
        <View className={styles.section}>
          <View className={styles.title}>请上传身份证的正反面</View>
          <UploadIdCard />
        </View>

        <View className={styles.section}>
          <View className={styles.title}>请完善您的个人信息</View>
          <ProfileForm onFinish={handleFinish} ref={ref} />
        </View>
      </View>

      <SubmitButtonFooter
        onClick={() => {
          ref?.current?.submit();
        }}
      />
    </View>
  );
};
export default CompleteProfile;
