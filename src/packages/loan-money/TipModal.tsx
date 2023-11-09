import { View, Button } from "@tarojs/components";
import Modal from "@/components/Modal";

import styles from "./index.module.scss";

const TipModal = ({ onOk, visible }) => {
  return (
    <Modal
      open={visible}
      title="提示"
      closable={false}
      footer={
        <View className={styles.footer}>
          <Button
            type="primary"
            onClick={onOk}
            loading={false}
            className={styles.confirmBtn}
          >
            确认
          </Button>
        </View>
      }
    >
      <View>
        感谢您的用款申请，每月的21号为本行的扣息日(包含本月)，请您至少提前一天存足备扣款项，以免影响您的征信。
      </View>
    </Modal>
  );
};
export default TipModal;
