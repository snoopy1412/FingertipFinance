/**
 * 指尖贷首页
 */
import { View, Text } from "@tarojs/components";
import { NoticeBar } from "@nutui/nutui-react-taro";
import { useState } from "react";
import BankServiceInfo from "./BankServiceInfo";
import NotLoggedIn from "./NotLoggedIn";
import { HomePageStatus } from "./data";
import LoggedInNotUsed from "./LoggedInNotUsed";
import LoggedInHasRecord from "./LoggedInHasRecord";

import "./index.scss";
import Taro from "@tarojs/taro";

const noticeText =
  "本业务未与任何中介机构合作，除向用户收取正常贷款利息外，绝无任何附加费用！";

function Index() {
  // faker data
  const [status, setStatus] = useState(HomePageStatus.LoggedInHasRecord);

  const handleBorrowMoneyButtonClick = () => {
    // 跳转到借钱页面
    Taro.navigateTo({
      url: "/packages/loan/index",
    });
  };

  const handleRepayMoneyButtonClick = () => {
    // 跳转到还钱页面
    Taro.navigateTo({
      url: "/packages/repayment-list/index",
    });
  };

  return (
    <View className="index">
      <View className="index__content">
        <NoticeBar
          content={noticeText}
          className="index__notice-bar"
          leftIcon={null}
        />
        <View className="index__quick-info">
          <Text className="quick-info__text--bold">快速到账 随借随还</Text>
          <Text className="quick-info__text">
            该额度为预评估，以实际审批为准
          </Text>
        </View>
        <View className="index__estimate-section">
          <Text className="estimate-section__text">预估额度(元)</Text>
          <Text className="estimate-section__amount">30,0000</Text>
          <Text className="estimate-section__interest">年利率5.9%</Text>
        </View>
      </View>
      {status === HomePageStatus.NotLoggedIn && <NotLoggedIn />}
      {status === HomePageStatus.LoggedInNotUsed && <LoggedInNotUsed />}
      {status === HomePageStatus.LoggedInHasRecord && (
        <LoggedInHasRecord
          onBorrowMoneyButtonClick={() => {
            handleBorrowMoneyButtonClick();
          }}
          onRepayMoneyButtonClick={() => {
            handleRepayMoneyButtonClick();
          }}
        />
      )}

      {/* 服务银行消息 */}
      <BankServiceInfo />
    </View>
  );
}

export default Index;
