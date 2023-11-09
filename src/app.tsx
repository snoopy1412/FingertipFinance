import { useEffect } from "react";
import { useDidShow, useDidHide } from "@tarojs/taro";
// 全局样式
import "./app.scss";
import { get, post } from "./utils/agent";

const App = (props) => {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    // get("/user/userinfo");
    post("/user/changeusername", {
      newUserName: "Aaron Su1",
    });
  });

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
};

export default App;
