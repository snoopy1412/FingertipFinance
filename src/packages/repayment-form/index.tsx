import Taro, { useRouter } from "@tarojs/taro";
import { Cell, Input, Picker } from "@nutui/nutui-react-taro";
import { Text } from "@tarojs/components";
import { View } from "@tarojs/components";
import { Right } from "@nutui/icons-react-taro";

import SubmitButtonFooter from "@/components/SubmitButtonFooter";
import { useState } from "react";

// 提前还款类型OPTIONS
const advanceRepaymentTypeOptions = [
  {
    text: "全部结清",
    value: "1",
  },
  {
    text: "部分还款",
    value: "3",
  },
];

const extraData = {
  rate: "4.35%", //利率
  totalPay: 300000, // 提前还款金额
};
const RepaymentForm = () => {
  const router = useRouter();

  console.log(router);

  // 提前放款金额（接口获取）
  const [advanceLoanAmount, setAdvanceLoanAmount] = useState<number>(0);
  const [advanceRepaymentType, setAdvanceRepaymentType] = useState("");

  const advanceRepaymentText = advanceRepaymentTypeOptions.find(
    (item) => item.value === advanceRepaymentType
  )?.text;

  const handleChangeAdvanceLoanAmount = (value) => {
    setAdvanceLoanAmount(value);
  };

  const confirmPicker = (list, values) => {
    if (values?.[0] === "3") {
      setAdvanceLoanAmount(0);
    } else {
      setAdvanceLoanAmount(extraData.totalPay);
    }
    setAdvanceRepaymentType(values[0]);
  };

  const [advanceLoanAmountVisible, setAdvanceLoanAmountVisible] =
    useState(false);

  const handleClick = () => {
    const submitData = {
      repaymentAccount: router.params.loanAccount,
      pin: "123456", // 需要唤起支付弹窗
      qbPwd: "123456", // 需要唤起支付弹窗，此处暂未处理
      dkye: advanceLoanAmount,
      hkType: advanceRepaymentType,
    };

    console.log(submitData);

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
          extra={router.params.noteNumber}
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
          extra={extraData.rate}
        />
        <Cell
          className="nutui-cell--clickable"
          title="贷款余额"
          align="center"
          extra={router.params.loanAmount}
        />
        <Cell
          className="nutui-cell--clickable"
          title="提前还款类型"
          align="center"
          extra={
            <View>
              {advanceRepaymentText ? advanceRepaymentText : "请选择"}
              <Right
                style={{
                  fontSize: 12,
                }}
              />
            </View>
          }
          onClick={() => setAdvanceLoanAmountVisible(!advanceLoanAmountVisible)}
        />
        <Picker
          visible={advanceLoanAmountVisible}
          options={advanceRepaymentTypeOptions}
          onConfirm={(list, values) => confirmPicker(list, values)}
          onClose={() => setAdvanceLoanAmountVisible(false)}
        />
        <Cell
          className="nutui-cell--clickable"
          title="提前放款金额"
          align="center"
          extra={
            advanceRepaymentType === "3" ? (
              <Input
                placeholder="请输入"
                value={advanceLoanAmount as any}
                onChange={handleChangeAdvanceLoanAmount}
              />
            ) : (
              `¥${advanceLoanAmount}`
            )
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          className="nutui-cell--clickable"
          title="放款时间"
          align="center"
          extra={router.params.startTime}
        />
        <Cell
          className="nutui-cell--clickable"
          title="提前还款时间"
          align="center"
          extra={router.params.dueTime}
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
