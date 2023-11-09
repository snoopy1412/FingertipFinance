import Modal from "@/components/Modal";
import { Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import tooltip from "@/assets/modal/tooltip.png";

import styles from "./index.module.scss";
import type { ModalProps } from "@/components/Modal";

interface PrivacyProtectionGuideProps extends ModalProps {
  content: string;
}
const PrivacyProtectionGuide = ({
  onOk,
  content,
  ...props
}: PrivacyProtectionGuideProps) => {
  return (
    <Modal
      {...props}
      closable={false}
      title="提示"
      footer={
        <div className={styles.footer}>
          <Button
            className={styles.confirmButton}
            type="primary"
            onClick={onOk}
          >
            确认
          </Button>
        </div>
      }
      icon={tooltip}
    >
      <Text>{content}</Text>
    </Modal>
  );
};
export default PrivacyProtectionGuide;
