/**
 * 贷款交易明细组件，展示贷款相关的交易信息。
 */

import { queryLoanDetail } from "@/api/repayment";
import useLoading from "@/hooks/useLoading";
import { useDidShow, useRouter } from "@tarojs/taro";
import { useRequest } from "ahooks";
import { useMemo } from "react";

const LoanDetailsView = () => {
  const { runAsync, loading, data } = useRequest(queryLoanDetail, {
    manual: true,
  });
  const router = useRouter();
  useLoading(loading);

  useDidShow(() => {
    const accountno = router.params.loanAccount;

    if (accountno) {
      runAsync({
        accountno: accountno,
      });
    }
  });

  const info = useMemo(() => {
    return {
      message: data?.data?.message,
      fkDate: data?.data?.fkDate,
      yqli: data?.data?.yqli,
      fkSum: data?.data?.fkSum,
      yqbj: data?.data?.yqbj,
      dkye: data?.data?.dkye,
    };
  }, [data?.data]);

  return (
    <div>
      <p>放款日期: {info?.fkDate}</p>
      <p>放款金额（元）: {info?.fkSum}</p>
      <p>逾期本金（元）: {info?.yqbj}</p>
      <p>逾期利息（元）: {info?.yqli}</p>
      <p>贷款余额（元）: {info?.dkye}</p>

      {info?.message && <p>摘要描述: {info?.message}</p>}
    </div>
  );
};

export default LoanDetailsView;
