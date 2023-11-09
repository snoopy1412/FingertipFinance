import { View } from "@tarojs/components";
import { useState } from "react";
import Modal from "@/components/Modal";
import { Input, Button } from "@nutui/nutui-react-taro";
import styles from "./index.module.scss";

const CaptchaCodeModal = ({ onNext, visible }) => {
  const [code, setCode] = useState("");
  const handleNext = () => {
    onNext(code);
  };
  return (
    <Modal
      open={visible}
      title="放款验证码"
      closable={false}
      footer={
        <View className={styles.footer}>
          <Button
            type="primary"
            onClick={handleNext}
            loading={false}
            className={styles.confirmBtn}
          >
            下一步
          </Button>
        </View>
      }
    >
      <View>
        <View>请输入139****1239收到的 验证码</View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            background: "#DCDCDC",
            padding: "0 10px",
          }}
        >
          <Input
            value={code}
            placeholder="请输入短信验证码"
            style={{
              background: "#DCDCDC",
            }}
            onChange={(value) => setCode(value)}
          />
          <View
            className="right"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Button type="primary" size="small">
              获取验证码
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default CaptchaCodeModal;
