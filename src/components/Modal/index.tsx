import React from "react";
import { View, Image } from "@tarojs/components";
import { Popup, Button } from "@nutui/nutui-react-taro";

import cancelIcon from "@/assets/modal/cancel.png";

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
  closable?: boolean;
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
  closable = true,
  confirmLoading,
}: ModalProps) => {
  return (
    <View className={styles.modal}>
      <Popup visible={open} onClose={onCancel} round>
        <View className={styles.container}>
          {icon ? (
            <Image src={icon} className={styles.modalIcon}></Image>
          ) : null}

          {closable ? (
            <View className={styles.cancel} onClick={onCancel}>
              <Image src={cancelIcon} className={styles.cancelIcon}></Image>
            </View>
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
