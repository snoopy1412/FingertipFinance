export default defineAppConfig({
  pages: ["pages/index/index", "pages/my/index"],
  subPackages: [
    {
      root: "packages/login",
      pages: ["index"],
      name: "登录",
      independent: false,
    },
    {
      root: "packages/complete-profile",
      pages: ["index"],
      name: "个人信息",
      independent: false,
    },
    {
      root: "packages/authorization-query",
      pages: ["index"],
      name: "查询授权书",
      independent: false,
    },
    {
      root: "packages/loan-info-form",
      pages: ["index"],
      name: "借款信息填写",
      independent: false,
    },
    {
      root: "packages/DrawdownRecord",
      pages: ["index"],
      name: "用款记录",
      independent: false,
    },
    {
      root: "packages/ApplicationRecord",
      pages: ["index"],
      name: "申请记录",
      independent: false,
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    selectedColor: "#c82248",
    color: "#7F7F80",
    borderStyle: "white",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "指尖贷",
        iconPath: "./assets/tabBar/credit-limit.png",
        selectedIconPath: "./assets/tabBar/credit-limit-active.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "./assets/tabBar/my.png",
        selectedIconPath: "./assets/tabBar/my-active.png",
      },
    ],
  },
});
