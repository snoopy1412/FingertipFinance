import { View, Text } from "@tarojs/components";
import { NoticeBar, Button } from "@nutui/nutui-react-taro";
import PrivacyProtectionGuide from "@/components/PrivacyProtectionGuide";
import "./index.scss";

const noticeText =
  "本业务未与任何中介机构合作，除向用户收取正常贷款利息外，绝无任何附加费用！";

function Index() {
  return (
    <View className="index">
      <PrivacyProtectionGuide visible={true} />
      <View className="index__content">
        <NoticeBar
          content={noticeText}
          className="index__notice-bar"
          leftIcon={null}
        />
        <View className="index__quick-info">
          <Text className="quick-info__text--bold">快速到账 随借随还</Text>
          <Text className="quick-info__text">
            该额度为预评估，以实际审批为准
          </Text>
        </View>
        <View className="index__estimate-section">
          <Text className="estimate-section__text">预估额度(元)</Text>
          <Text className="estimate-section__amount">30,0000</Text>
          <Text className="estimate-section__interest">年利率5.9%</Text>
        </View>
        PrivacyProtectionGuide
      </View>
      <View className="index__apply">
        <Button
          shape="round"
          type="primary"
          size="large"
          className="apply__button"
        >
          立即申请
        </Button>
        <View className="index__service-info">
          <Text className="service-info__provider">
            服务由连云港东方农村商业银行提供{" "}
          </Text>
          <Text className="service-info__contact-number">
            联系电话：0518-85196008
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Index;
