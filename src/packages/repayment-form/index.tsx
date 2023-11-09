import Taro, { useRouter } from "@tarojs/taro";
import { Cell } from "@nutui/nutui-react-taro";
import { Text } from "@tarojs/components";
import { View } from "@tarojs/components";
import SubmitButtonFooter from "@/components/SubmitButtonFooter";

const RepaymentForm = () => {
  const router = useRouter();

  const handleClick = () => {
    // 成功后
    Taro?.navigateTo({
      url: "/packages/repayment-success/index",
    });
  };

  return (
    <View>
      <Cell.Group>
        <Cell
          className="nutui-cell--clickable"
          title="借据编号"
          align="center"
          extra="1212121"
        />
        <Cell
          className="nutui-cell--clickable"
          title="贷款种类"
          align="center"
          extra="个人信用消费类贷款"
        />
      </Cell.Group>
      <Cell.Group>
        <Cell
          className="nutui-cell--clickable"
          title="执行利率"
          align="center"
          extra="4.35%"
        />
        <Cell
          className="nutui-cell--clickable"
          title="贷款余额"
          align="center"
          extra="¥ 100,000.00"
        />
        <Cell
          className="nutui-cell--clickable"
          title="提前还款类型"
          align="center"
          extra="¥ 100,000.00"
        />
        <Cell
          className="nutui-cell--clickable"
          title="提前放款金额"
          align="center"
          extra="¥ 100,000.00"
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          className="nutui-cell--clickable"
          title="放款时间"
          align="center"
          extra="1212121"
        />
        <Cell
          className="nutui-cell--clickable"
          title="提前还款时间"
          align="center"
          extra="个人信用消费类贷款"
        />
      </Cell.Group>

      <View>
        <Text>温馨提示：</Text>
        <Text>每天18点到24点之间提前还款可能会失败，建议在其他时段 操作。</Text>
      </View>

      <SubmitButtonFooter onClick={handleClick} />
    </View>
  );
};
export default RepaymentForm;
