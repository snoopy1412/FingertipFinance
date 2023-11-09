import { View, Text } from "@tarojs/components";
import { Button, Cell } from "@nutui/nutui-react-taro";
import { Right } from "@nutui/icons-react-taro";
import style from "./index.module.scss";
import Taro from "@tarojs/taro";
import { Avatar } from "@nutui/nutui-react-taro";
import avatarUrl from "@/assets/my/avatar.png";
import { IconFont } from "@nutui/icons-react-taro";
import application from "@/assets/my/application.png";
import drawdown from "@/assets/my/drawdown.png";

const My = () => {
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
            title={
              <View className={style.cell}>
                <IconFont name={application} size={22} className={style.icon} />
                <Text>申请记录</Text>
              </View>
            }
            align="center"
            extra={<Right />}
            onClick={() => handleClick("application-record")}
          />
          <Cell
            title={
              <View className={style.cell}>
                <IconFont name={drawdown} size={22} className={style.icon} />
                <Text>用款记录</Text>
              </View>
            }
            extra={<Right />}
            align="center"
            onClick={() => handleClick("drawdown-record")}
          />
        </Cell.Group>
        <Button className={style.button} shape="round" type="default">
          退出登录
        </Button>
      </View>
    </View>
  );
};

export default My;
