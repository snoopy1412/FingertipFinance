import { post } from "@/utils/agent";

/**
 * 查询页面显示信息
 * POST /searchCustomer
 */
export const postSearchCustomer = () => post("/searchCustomer");

/**
 * 系统开放时间限制
 * POST /home/judgeCanUseApp
 */

export const postJudgeCanUseApp = () => post("/home/judgeCanUseApp");
