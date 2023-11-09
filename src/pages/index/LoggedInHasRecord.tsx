import { Button } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";

import styles from "./LoggedInHasRecord.module.scss";

interface LoggedInHasRecordProps {
  onRepayMoneyButtonClick: () => void;
  onBorrowMoneyButtonClick: () => void;
}
const LoggedInHasRecord = ({
  onRepayMoneyButtonClick,
  onBorrowMoneyButtonClick,
}: LoggedInHasRecordProps) => {
  return (
    <>
      <View className={styles.container}>
        <Button
          shape="round"
          type="default"
          size="large"
          className={styles.repayMoneyButton}
          onClick={onRepayMoneyButtonClick}
        >
          我要还钱
        </Button>
        <Button
          shape="round"
          type="primary"
          size="large"
          className={styles.borrowMoneyButton}
          onClick={onBorrowMoneyButtonClick}
        >
          我要借钱
        </Button>
      </View>
    </>
  );
};
export default LoggedInHasRecord;
