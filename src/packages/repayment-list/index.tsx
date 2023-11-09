import { View } from "@tarojs/components";
import LoanDetails from "./LoanDetails";

const fakerData = [
  {
    DKYE: "1000",
    DQRQ: "2022年8月2日",
    DKZH: "1234567890",
    QSRQ: "2019年8月2日",
    ZHZT: "1",
  },
  {
    DKYE: "1000",
    DQRQ: "2020年8月2日",
    DKZH: "1234567890",
    QSRQ: "2018年8月2日",
    ZHZT: "2",
  },
];
const RepaymentList = () => {
  return (
    <View>
      {fakerData?.map((item) => {
        return (
          <LoanDetails
            key={item.DKZH}
            loanAmount={item.DKYE}
            startTime={item.QSRQ}
            dueTime={item.DQRQ}
            accountStatus={item.ZHZT}
            noteNumber={item.DKZH}
          />
        );
      })}
    </View>
  );
};

export default RepaymentList;
