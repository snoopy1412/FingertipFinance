import { useState, useRef } from "react";
import { View, Text } from "@tarojs/components";
import { Button, Radio, Notify } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import CaptchaCodeModal from "@/components/CaptchaCodeModal";
import Form from "./Form";
import TipModal from "./TipModal";
import PasswordKeyboard from "./PasswordKeyboard";
import styles from "./index.module.scss";

const LoanMoney = () => {
  const ref = useRef<any>();
  const [checkAgreement, setCheckAgreement] = useState<boolean>(false);
  const [notifyVisible, setNotifyVisible] = useState<boolean>(false);
  const [tipVisible, setTipVisible] = useState<boolean>(false);
  const [captchaCodeVisible, setCaptchaCodeVisible] = useState<boolean>(false);
  const [payVisible, setPayVisible] = useState<boolean>(false);
  const [walletVisible, setWalletVisible] = useState<boolean>(false);
  /**
   * 点击底部确认按钮，验证是否勾选和必填项，通过就提交表单
   */
  const handleConfirm = () => {
    if (!checkAgreement) {
      setNotifyVisible(true);
      return;
    }
    ref?.current?.submit();
  };

  /**
   * 提交借款信息，成功后显示提示窗口
   */
  const handleFinish = (values) => {
    console.log("values", values);
    setTipVisible(true);
  };

  /**
   * 点击确认，关闭提示窗口，并获取验证码 + 显示放款验证码弹窗
   */
  const handleOkTip = () => {
    setTipVisible(false);
    setCaptchaCodeVisible(true);
  };

  /**
   *  输入验证码后下一步,唤醒数字键盘
   */
  const handleNext = (code) => {
    console.log("输入的验证码", code);
    setCaptchaCodeVisible(false);
    setPayVisible(true);
  };

  /**
   *  点击确认支付密码，关闭弹窗，并唤醒钱包密码
   */
  const handleConfirmPay = (pwd) => {
    console.log("支付密码", pwd);
    setPayVisible(false);
    setWalletVisible(true);
  };
  /**
   * 输入钱包密码。成功后关闭弹窗，并跳转成功页面
   */
  const handleConfirmWallet = (pwd) => {
    console.log("钱包密码", pwd);
    setWalletVisible(false);
    Taro.navigateTo({
      url: "/packages/loan-money-success/index",
    });
  };
  return (
    <View className={styles.container}>
      <Notify
        visible={notifyVisible}
        position="top"
        onClose={() => {
          setNotifyVisible(false);
        }}
      >
        请先勾选《贷款用途承诺书》!
      </Notify>
      <PasswordKeyboard
        title="请输入支付密码"
        visible={payVisible}
        onClose={() => setPayVisible(false)}
        onConfirm={handleConfirmPay}
      />
      <PasswordKeyboard
        title="请输入钱包开户密码"
        visible={walletVisible}
        onClose={() => setWalletVisible(false)}
        onConfirm={handleConfirmWallet}
      />
      <TipModal visible={tipVisible} onOk={handleOkTip} />
      <CaptchaCodeModal
        visible={captchaCodeVisible}
        onNext={handleNext}
        title="放款验证码"
      />
      <View className={styles.banner}>
        <Button> 用款记录</Button>
        <View>
          <Text>可借额度</Text>
          <Text>5000</Text>
        </View>
        <View>
          <Text>年利率5.90000%</Text>
          <Text>1万元一天只需1.62元</Text>
        </View>
      </View>
      <View className={styles.cell}>
        <Form onFinish={handleFinish} ref={ref} />
      </View>
      <View className={styles.tips}>
        <Text>温馨提示：</Text>
        <Text>1、单日放款金额需低于30万元</Text>
        <Text>2、当日放款不能当日还款</Text>
      </View>
      <View className={styles.agreement}>
        <Radio
          checked={checkAgreement}
          onChange={(value) => setCheckAgreement(value)}
        >
          同意《贷款用途承诺书》
        </Radio>
      </View>
      <Button type="primary" onClick={handleConfirm}>
        确定
      </Button>
    </View>
  );
};
export default LoanMoney;
