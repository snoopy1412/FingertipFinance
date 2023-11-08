import { View } from "@tarojs/components";
import FooterTabBar from "@/components/FooterTabBar";
import { Button, Cell } from "@nutui/nutui-react-taro";
import { Right } from "@nutui/icons-react-taro";
import style from "./index.module.scss";

function Index() {
  return (
    <View className={style.container}>
      <View className={style.header}></View>
      <View className={style.content}>
        <Cell.Group className={style.list} divider>
          <Cell title="申请记录" align="center" extra={<Right />} />
          <Cell title="用款记录" extra={<Right />} align="center" />
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
