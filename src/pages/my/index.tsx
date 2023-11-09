import { View, Text } from "@tarojs/components";
import { Button, Cell } from "@nutui/nutui-react-taro";
import { Right } from "@nutui/icons-react-taro";
import style from "./index.module.scss";
import Taro from "@tarojs/taro";
import { Avatar } from "@nutui/nutui-react-taro";
import avatarUrl from "@/assets/avatar.png";
function Index() {
  const handleClick = (key) => {
    Taro.navigateTo({
      url: `/packages/${key}/index`,
    });
  };
  const userInfo = {
    phone: "161****0191",
    avatarUrl: avatarUrl,
  };
  return (
    <View className={style.container}>
      <View className={style.header}>
        <View className={style.info}>
          <Avatar
            size="large"
            className={style.avatar}
            src={userInfo.avatarUrl}
          />
          <Text className={style.name}>{userInfo.phone}</Text>
        </View>
      </View>
      <View className={style.content}>
        <Cell.Group className={style.list} divider>
          <Cell
            title="申请记录"
            align="center"
            extra={<Right />}
            onClick={() => handleClick("ApplicationRecord")}
          />
          <Cell
            title="用款记录"
            extra={<Right />}
            align="center"
            onClick={() => handleClick("DrawdownRecord")}
          />
        </Cell.Group>
        <Button
          className={style.button}
          shape="round"
          type="default"
          size="large"
        >
          退出登录
        </Button>
      </View>
    </View>
  );
}

export default Index;
