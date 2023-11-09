import { View, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";

import styles from "./index.module.scss";

export interface InfoProps {
  getMoney: number;
  beginTime: string;
  endTime: string;
  xdstate: string;
}
interface ItemProps {
  info: InfoProps;
  onClick: (arg: InfoProps) => void;
}

const Item = ({ info, onClick }: ItemProps) => {
  const itemInfo = [
    {
      label: "授信额度",
      key: "getMoney",
    },
    {
      label: "起始日期",
      key: "beginTime",
    },
    {
      label: "到期日期",
      key: "endTime",
    },
  ];

  const handleClick = () => {
    onClick(info);
  };
  return (
    <View className={styles.item}>
      <View className={styles.header}>
        <Text className={styles.title}>申请记录</Text>
        <Text className={styles.status}>状态：{info?.xdstate}</Text>
      </View>
      <View className={styles.content}>
        {itemInfo.map((item) => (
          <View key={item?.key} className={styles.info}>
            <Text className={styles.label}>{item?.label}</Text>
            <Text className={styles.value}>{info?.[item.key]}</Text>
          </View>
        ))}
        <View className={styles.action}>
          <Button
            type="danger"
            className={styles.button}
            onClick={handleClick}
            fill="outline"
          >
            查看贷款证明
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Item;
