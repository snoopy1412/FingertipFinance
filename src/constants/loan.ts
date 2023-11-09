/**
 * 贷款信息常量
 */
import type { Option } from "@/components/Select";

/**
 * 贷款用途
 */
export const loanPurposeOptions: Option[] = [
  { text: "度假旅游", value: "度假旅游" },
  { text: "购买电器", value: "购买电器" },
  { text: "购买家具", value: "购买家具" },
  { text: "购买房产", value: "购买房产" },
  { text: "其他", value: "其他" },
];

/**
 * 还款方式 等额本金
 */
export const repaymentMethodOptions: Option[] = [
  { text: "等额本金", value: "等额本金" },
  { text: "等额本息", value: "等额本息" },
];

/**
 * 银行卡列表 需加密
 */
export const bankCardOptions: Option[] = [
  {
    text: "6230**********0000",
    value: "6230**********0000",
  },
];

/**
 * 我要借钱 借款期限
 */
export const loanPeriodOptions: Option[] = [
  { text: "三个月", value: "3" },
  { text: "六个月", value: "6" },
  { text: "十二个月", value: "12" },
];
