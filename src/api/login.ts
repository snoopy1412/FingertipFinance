import { post } from "@/utils/agent";

/**
 * @description 根据code获取openID
 * POST /getWxSession
 */
export const postGetWxSession = ({ code }) => post("/getWxSession", { code });

/**
 * @description 根据小程序openid登录
 * POST /loginByOpenid
 */
export const postLoginByOpenid = ({ openid }) =>
  post("/loginByOpenid", { openid });
