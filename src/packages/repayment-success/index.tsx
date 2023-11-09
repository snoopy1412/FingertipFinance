import { Button } from "@nutui/nutui-react-taro";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

const RepaymentSuccess = () => {
  return (
    <View>
      <Text>还款成功</Text>
      <Text>还可以关注我行其他产品，详情请致电 0518-85196008 </Text>
      <Button
        type="primary"
        onClick={() => {
          Taro.switchTab({
            url: "/pages/index/index",
          });
        }}
      >
        返回首页
      </Button>
    </View>
  );
};
export default RepaymentSuccess;
