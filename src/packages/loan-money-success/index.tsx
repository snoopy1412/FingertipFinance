import { View, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
const LoanMoneySuccess = () => {
  /**
   * 返回首页
   */
  const handleBackHome = () => {
    Taro.switchTab({
      url: "/pages/index/index",
    });
  };
  return (
    <View>
      <View>
        <Text>恭喜您成功用信</Text>
        <Text>200,000元</Text>
      </View>
      <View>
        <Text>放款至银行账户 6230**********7527</Text>
        <Text>请于每月20日之前将还款金额存入银行账户</Text>
        <Text>如有疑问请咨询 0518-85196008</Text>
      </View>
      <Button type="primary" onClick={handleBackHome}>
        返回首页
      </Button>
    </View>
  );
};
export default LoanMoneySuccess;
