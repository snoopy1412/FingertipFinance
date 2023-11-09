/**
 * 贷款交易明细组件，展示贷款相关的交易信息。
 *
 * @component
 * @param {Object} props
 * @param {string} props.message 摘要描述
 * @param {string} props.fkDate 放款日期，展示贷款发放的具体日期。
 * @param {string} props.yqli 已清利息，展示已经支付的利息金额。
 * @param {string} props.fkSum 放款金额，表示贷款或支付款项的总额。
 * @param {string} props.yqbj 逾期本金，表示逾期未还的本金金额。
 * @param {string} props.dkye 贷款余额，表示当前贷款的未还余额。
 * @returns {JSX.Element} 返回一个用于展示贷款交易明细的React元素。
 */

const data = {
  message: "",
  fkDate: "2023/11/07",
  status: "success",
  yqli: "0.00",
  fkSum: "1000",
  yqbj: "0",
  dkye: "2000",
};
const LoanDetailsView = () => {
  const { message, fkDate, yqli, fkSum, yqbj, dkye } = data;
  return (
    <div>
      <p>放款日期: {fkDate}</p>
      <p>放款金额（元）: {fkSum}</p>
      <p>逾期本金（元）: {yqbj}</p>
      <p>逾期利息（元）: {yqli}</p>
      <p>贷款余额（元）: {dkye}</p>

      {message && <p>摘要描述: {message}</p>}
    </div>
  );
};

export default LoanDetailsView;
