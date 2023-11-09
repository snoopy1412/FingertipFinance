// 校验手机号
export const phoneValidator = (rule, value: string) => {
  return /^1[3456789]\d{9}$/.test(value);
};
