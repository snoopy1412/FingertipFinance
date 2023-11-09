import { Button } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";

import styles from "./index.module.scss";

interface SubmitButtonFooterProps {
  onClick: () => void;
  confirmLoading?: boolean;
  text?: string;
}
const SubmitButtonFooter = ({
  onClick,
  text = "提交",
  confirmLoading,
}: SubmitButtonFooterProps) => {
  return (
    <View className={styles.container}>
      <Button
        type="primary"
        className={styles.submitButton}
        onClick={onClick}
        loading={confirmLoading}
      >
        {text}
      </Button>
    </View>
  );
};

export default SubmitButtonFooter;
