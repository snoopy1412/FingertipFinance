import { View, Text } from "@tarojs/components";
import styles from "./BankServiceInfo.module.scss";

const BankServiceInfo = () => {
  return (
    <View className={styles?.container}>
      <Text className={styles.provider}>服务由连云港东方农村商业银行提供</Text>
      <Text className={styles.contact}>联系电话：0518-85196008</Text>
    </View>
  );
};
export default BankServiceInfo;
