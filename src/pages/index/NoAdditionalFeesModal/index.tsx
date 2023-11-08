import Modal from "@/components/Modal";
import { Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import tooltip from "@/assets/modal/tooltip.png";

import styles from "./index.module.scss";
import type { ModalProps } from "@/components/Modal";

const PrivacyProtectionGuide = (props: ModalProps) => {
  return (
    <Modal
      {...props}
      title="提示"
      footer={
        <div className={styles.footer}>
          <Button className={styles.confirmButton} type="primary">
            确认
          </Button>
        </div>
      }
      icon={tooltip}
    >
      <Text>
        本业务未与任何中介机构合作，除向用 户收取正常贷款利息外，绝无任何附加
        费用！
      </Text>
    </Modal>
  );
};
export default PrivacyProtectionGuide;
