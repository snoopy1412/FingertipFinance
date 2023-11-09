/**
 * 指尖贷首页
 */
import { View, Text } from "@tarojs/components";
import { NoticeBar } from "@nutui/nutui-react-taro";
import { useDidShow } from "@tarojs/taro";
import { useEffect, useMemo, useState } from "react";
import BankServiceInfo from "./BankServiceInfo";
import NotLoggedIn from "./NotLoggedIn";
import { HomePageStatus } from "./data";
import LoggedInNotUsed from "./LoggedInNotUsed";
import LoggedInHasRecord from "./LoggedInHasRecord";
import { useRequest } from "ahooks";
import { postSearchCustomer, postJudgeCanUseApp } from "@/api/home";
import "./index.scss";
import Taro from "@tarojs/taro";
import { userStore } from "@/store/user";
import useLoading from "@/hooks/useLoading";

// 此数据由接口获取，暂时写死
const noticeText =
  "本业务未与任何中介机构合作，除向用户收取正常贷款利息外，绝无任何附加费用！";

function Index() {
  const { isLoggedIn } = userStore();
  const [status, setStatus] = useState(HomePageStatus.NotLoggedIn);

  // 定义接口
  const { runAsync: fetchJudgeCanUseApp, loading: judgeCanUseAppLoading } =
    useRequest(postJudgeCanUseApp, {
      manual: true,
      onSuccess: (res) => {
        // 错误处理
        if (res?.data?.status === "error") {
          Taro.showToast({
            title: res?.data?.info || "获取数据失败",
            icon: "none",
          });
        }
      },
    });
  // 定义接口
  const {
    runAsync: fetchSearchCustomer,
    data,
    loading,
  } = useRequest(postSearchCustomer, {
    manual: true,
    onSuccess: (res) => {
      // 错误处理
      if (res?.data?.status === "error") {
        Taro.showToast({
          title: res?.data?.info || "获取数据失败",
          icon: "none",
        });
      }
    },
  });

  // 页面加载时显示loading
  useLoading(loading || judgeCanUseAppLoading);

  // 页面数据
  const info = useMemo(() => {
    return {
      status: data?.data?.status,
      topMes: data?.data?.topMes,
      limit: data?.data?.limit,
      rate: data?.data?.rate,
      ratex: data?.data?.ratex,
      advance: data?.data?.advance,
      ifUpCard: data?.data?.ifUpCard,
    };
  }, [data?.data]);

  useDidShow(() => {
    fetchJudgeCanUseApp()?.then((res) => {
      // 根据条件判断是否执行，此处未处理
      // 1、status为canuse，弹框“本业务未与任何中介机构合作，除向用户收取正常的贷款利息外，绝无任何附加费用！”。否则显示“系统升级维护中，请稍后再试”。
      // 2、status为canuse并且timeLimit为true,弹框“系统使用时间为7:00-22:30，请您在系统开放时间使用。”
      // 3、status为canuse并且timeLimit不为true，调用/xskd/searchCustomer接口
      fetchSearchCustomer();
    });
  });

  // 根据接口返回的数据，判断当前页面状态
  useEffect(() => {
    if (!isLoggedIn) {
      setStatus(HomePageStatus.NotLoggedIn);
    } else {
      if (data?.data?.advance === "sub") {
        setStatus(HomePageStatus.LoggedInNotUsed);
      } else if (data?.data?.advance === "get") {
        setStatus(HomePageStatus.LoggedInHasRecord);
      }
    }
  }, [isLoggedIn, data?.data]);

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
          {info?.ratex && (
            <Text className="quick-info__text">{info?.ratex}</Text>
          )}
        </View>
        <View className="index__estimate-section">
          <Text className="estimate-section__text">{info?.topMes}</Text>
          <Text className="estimate-section__amount">{info?.limit}</Text>
          <Text className="estimate-section__interest">{info?.rate}</Text>
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
