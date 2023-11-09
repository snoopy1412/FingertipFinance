import { View, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
/**
 * 贷款详情组件，展示贷款相关信息。
 *
 * @component
 * @param {Object} props
 * @param {string} props.loanAmount 用款金额，表示贷款的数额。
 * @param {string} props.startTime 贷款的起始时间。
 * @param {string} props.dueTime 贷款的到期时间。
 * @param {string} props.accountStatus 贷款账户的当前状态。
 * @param {string} props.noteNumber 借据号，用于唯一标识一笔贷款或借款。
 * @param {string} props.loanAccount 贷款账号
 * @returns {JSX.Element} 返回一个用于展示贷款详情的React元素。
 */
const LoanDetails = ({
  loanAmount,
  startTime,
  dueTime,
  accountStatus,
  noteNumber,
  loanAccount,
}) => {
  const handleToDetail = () => {
    Taro.navigateTo({
      url: `/packages/repayment-detail/index?loanAccount=${loanAccount}`,
    });
  };

  const handleToRepay = () => {
    console.log("去还款");
    Taro.navigateTo({
      url: `/packages/repayment-form/index?loanAccount=${loanAccount}&loanAmount=${loanAmount}&startTime=${startTime}&dueTime=${dueTime}&accountStatus=${accountStatus}&noteNumber=${noteNumber}`,
    });
  };
  return (
    <View>
      <Text>用款金额: {loanAmount}</Text>
      <Text>起始时间: {startTime}</Text>
      <Text>到期时间: {dueTime}</Text>
      <Text>账户状态: {accountStatus}</Text>
      <Text>借据号: {noteNumber}</Text>
      <View>
        <Button onClick={handleToRepay}>去还款</Button>
        <Button onClick={handleToDetail}>查看明细</Button>
      </View>
    </View>
  );
};

export default LoanDetails;
