import { View, Image, Text } from "@tarojs/components";
import { Popup, Button } from "@nutui/nutui-react-taro";
import guide from "@/assets/privacy-protection-guide.png";

import styles from "./index.module.scss";

interface PrivacyProtectionGuideProps {
  visible?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  confirmLoading?: boolean;
}
const PrivacyProtectionGuide = ({
  visible,
  onClose,
  onConfirm,
  confirmLoading,
}: PrivacyProtectionGuideProps) => {
  return (
    <View className={styles.modal}>
      <Popup
        visible={visible}
        onClose={onClose}
        overlayClassName={styles.privacyProtectionGuide}
        round
      >
        <View className={styles.content}>
          <Image src={guide} className={styles.image}></Image>
          <View className={styles.textContainer}>
            <Text className={styles.title}>隐私保护指引</Text>
            <Text className={styles.description}>
              在使用当前小程序服务之前，请仔细阅读隐私政策。如你同意
              <Text className={styles.privacyPolicyLink}>隐私政策</Text>
              ，请点击“同意”开始使用。
            </Text>
          </View>
          <View className={styles.buttonContainer}>
            <Button className={styles.rejectButton} onClick={onClose}>
              拒绝
            </Button>
            <Button
              className={styles.confirmButton}
              type="primary"
              onClick={onConfirm}
              loading={confirmLoading}
            >
              同意
            </Button>
          </View>
        </View>
      </Popup>
    </View>
  );
};
export default PrivacyProtectionGuide;
