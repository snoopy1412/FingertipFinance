import { RSA_PUBLIC_KEY } from "@/constants/base";
import jsencrypt from "jsencrypt";
import { isPlainObject } from "lodash-es";

// 使用公钥加密数据
export const encryptWithPublicKey = (data) => {
  const encryptor = new jsencrypt();
  encryptor.setPublicKey(RSA_PUBLIC_KEY);
  return encryptor.encrypt(data);
};

export const encryptSensitiveData = (data) => {
  if (!isPlainObject(data)) {
    return data;
  }

  const exemptKeys = ["token", "liveAddress", "pin"];

  for (var key in data) {
    if (!exemptKeys.includes(key)) {
      data[key] = encryptWithPublicKey(data[key]);
    }
  }

  return data;
};
