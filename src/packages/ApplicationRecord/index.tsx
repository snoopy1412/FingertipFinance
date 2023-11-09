import { View } from "@tarojs/components";
import Item from "./Item";
import styles from "./index.module.scss";

import type { InfoProps } from "./Item";
const ApplicationRecord = () => {
  const list: InfoProps[] = [
    {
      getMoney: 1000,
      beginTime: "2023-01-11",
      endTime: "2030-01-11",
      xdstate: "申请成功",
    },
    {
      getMoney: 1000,
      beginTime: "2023-01-11",
      endTime: "2030-01-11",
      xdstate: "申请失败",
    },
  ];
  /**
   * 查看贷款证明
   */
  const handleClick = (info: InfoProps) => {
    console.log(info);
  };
  return (
    <View className={styles.record}>
      {list.length > 1
        ? list.map((info, index) => (
            <Item info={info} onClick={handleClick} key={index} />
          ))
        : null}
    </View>
  );
};

export default ApplicationRecord;
