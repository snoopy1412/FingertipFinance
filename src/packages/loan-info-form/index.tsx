/**
 * 借款信息填写
 */
import { View, Text } from "@tarojs/components";
import Form from "./Form";
import styles from "./index.module.scss";
import { Button } from "@nutui/nutui-react-taro";
import { useRef } from "react";

const LoanInfoForm = () => {
  const ref = useRef<any>();
  const handleFinish = (values) => {
    console.log("values", values);
  };
  return (
    <View className={styles.loanInfoContainer}>
      <View className={styles.loanInfoHeader}>
        <Text className={styles.congratulationsText}>恭喜您</Text>
        <Text className={styles.availableLoanText}>您的可用借款额度(元)</Text>
        <Text className={styles.loanAmountText}>50000</Text>
        <Text className={styles.interestRateText}>利率4.35%</Text>
      </View>
      <View className={styles.loanForm}>
        <Form onFinish={handleFinish} />
      </View>
      <View className={styles.footer}>
        <Button
          type="primary"
          className={styles.submitButton}
          onClick={() => {
            ref?.current?.submit();
          }}
        >
          提交
        </Button>
      </View>
    </View>
  );
};
export default LoanInfoForm;
