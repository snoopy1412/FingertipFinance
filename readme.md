# 项目名称

## 项目简介

这是一个基于 Taro 开发的微信小程序项目。

## 安装和运行

首先，你需要安装项目的依赖：

```bash
npm install
# 然后进行开发
npm run dev:weapp

# 打包
npm run build:weapp
```

请注意，为了节省时间，接口地址定义在 src/constants/base.ts 文件中

## 微信小程序开发

在进行微信小程序开发时，你需要使用自己的小程序测试号或者公司申请的小程序开发账号。

特别注意，当你在配置服务器 API 地址时，你需要在微信小程序后台进行相应的白名单配置。

登录地址：https://mp.weixin.qq.com

## 注意

1. 由于时间问题，目前有很多内容是不完整的，容易出现错误，请注意甄别
2. 项目主要的技术栈包含 react、typescript、taro、ahook(react 钩子函数库)、axios(接口请求)、微信小程序 API、zustand（react 状态管理）
