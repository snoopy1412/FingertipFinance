import Modal from "@/components/Modal";
import { Text } from "@tarojs/components";
import guide from "@/assets/modal/privacy-protection-guide.png";

import type { ModalProps } from "@/components/Modal";

const PrivacyProtectionGuide = (props: ModalProps) => {
  return (
    <Modal
      {...props}
      title="隐私保护指引"
      cancelText="拒绝"
      okText="同意"
      icon={guide}
    >
      <Text>
        在使用当前小程序服务之前，请仔细阅读隐私政策。如你同意
        <Text
          style={{
            color: "var(--nutui-brand-color)",
          }}
        >
          隐私政策
        </Text>
        ，请点击“同意”开始使用。
      </Text>
    </Modal>
  );
};
export default PrivacyProtectionGuide;
