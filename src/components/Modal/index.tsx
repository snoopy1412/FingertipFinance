import React from "react";
import { View, Image } from "@tarojs/components";
import { Popup, Button } from "@nutui/nutui-react-taro";

import styles from "./index.module.scss";

export interface ModalProps {
  open?: boolean;
  onCancel?: () => void;
  cancelText?: React.ReactNode;
  onOk?: () => void;
  okText?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  confirmLoading?: boolean;
  footer?: React.ReactNode | boolean;
  icon?: string;
}
const Modal = ({
  open,
  onCancel,
  icon,
  cancelText = "取消",
  title,
  onOk,
  footer = true,
  okText = "确定",
  children,
  confirmLoading,
}: ModalProps) => {
  return (
    <View className={styles.modal}>
      <Popup visible={open} onClose={onCancel} round>
        <View className={styles.container}>
          {icon ? (
            <Image src={icon} className={styles.modalIcon}></Image>
          ) : null}
          <View className={styles.title}>{title}</View>
          <View className={styles.content}>{children}</View>
          {footer ? (
            <View className={styles.footer}>
              {React.isValidElement(footer) ? (
                footer
              ) : (
                <>
                  <Button className={styles.cancelButton} onClick={onCancel}>
                    {cancelText}
                  </Button>
                  <Button
                    className={styles.confirmButton}
                    type="primary"
                    onClick={onOk}
                    loading={confirmLoading}
                  >
                    {okText}
                  </Button>
                </>
              )}
            </View>
          ) : null}
        </View>
      </Popup>
    </View>
  );
};
export default Modal;
