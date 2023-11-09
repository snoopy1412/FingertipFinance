/**
 * 查询授权书
 */

import { Button, Checkbox } from "@nutui/nutui-react-taro";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";
import SubmitButtonFooter from "@/components/SubmitButtonFooter";

const auditTaskList = [
  {
    title: "审核带款申请",
    key: "1",
    checked: true,
  },
  {
    title: "对已发放的个人信贷进行贷后风险管理",
    key: "2",
    checked: false,
  },
  {
    title: "审核贷记卡、准贷记卡申请",
    key: "3",
    checked: false,
  },
  {
    title: "审核本人作为担保人",
    key: "4",
    checked: false,
  },
  {
    title:
      "受理法人或其他组织的贷款申请或其作为担保人，需要查询其法定代表人及出资人信用状况",
    key: "5",
    checked: false,
  },
  {
    title: "对公业务贷后管理需查询法定代表人及出资人信用状况",
    key: "6",
    checked: false,
  },
  {
    title: "对特约商户实名审查",
    key: "7",
    checked: false,
  },
  {
    title: "对公积金提取复核",
    key: "8",
    checked: false,
  },
  {
    title: "处理本人征信",
    key: "9",
    checked: false,
  },
];

const AuthorizationQuery = () => {
  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <View className={styles.title}>个人信用报告查询授权书</View>
        <Text className={styles.bankName}>
          XX商业银行股份有限公司营业支行（部）：
        </Text>
        <View className={styles.authorizationText}>
          本人<Text className={styles.importantText}>不可撤销地</Text>
          授权贵行（包括贵行个分支机构）在办理以下涉及到本人的业务时，可以根据国家有关法律规定，通过金融信用信息基础数据库和其他依法设立的征信机构查询、打印、保存、使用本人信用报告，
          同时本人<Text className={styles.importantText}>不可撤销地</Text>
          授权贵行将包括本地人个人基本信息、信贷交易信息及
          <Text className={styles.importantText}>不良信用信息</Text>
          等相关信息向金融信用信息基础数据库和其他依法设立的征信机构报送：
        </View>
      </View>

      <View className={styles.taskList}>
        {auditTaskList?.map((item) => {
          return (
            <View key={item.key} className={styles.taskItem}>
              <Checkbox label={item.title} defaultChecked={item.checked} />
            </View>
          );
        })}
      </View>
      <View className={styles.authorizationValidity}>
        <Text className={styles.authorizationText}>
          本授权书有效期为：自本人签署之日起至所有授信业务完全结清且有关合同/协议履行完毕之日止。
        </Text>
        <Text className={styles.authorizationUnderstanding}>
          本人知悉并充分理解本授权书中载明的所有内容，愿意承担本授权书中各类授权事项可能产生的相应法律责任，无论信贷业务是否获贵行批准，本人的授权书、个人信用报告等资料一律无需贵行退还。
        </Text>

        <View className={styles.personalInfo}>
          <View className={styles.personalInfoItem}>
            <Text className={styles.personalInfoLabel}>身份证号：</Text>
            <Text className={styles.personalInfoValue}>xxx</Text>
          </View>
          <View className={styles.personalInfoItem}>
            <Text className={styles.personalInfoLabel}>姓名：</Text>
            <Text className={styles.personalInfoValue}>xxx</Text>
          </View>
          <View className={styles.personalInfoItem}>
            <Text className={styles.personalInfoLabel}>授权日期：</Text>
            <Text className={styles.personalInfoValue}>xxx</Text>
          </View>
        </View>
      </View>
      <View className={styles.agreement}>
        <Checkbox className={styles.agreementCheckbox}>
          我已阅读并同意
          <Text className={styles.agreementText}>
            《综合信息查询授权委托书》
          </Text>
          、<Text className={styles.agreementText}>《征信查询授权书》</Text>及
          <Text className={styles.agreementText}>《告客户书》</Text>
        </Checkbox>
      </View>

      <SubmitButtonFooter onClick={() => {}} />
    </View>
  );
};

export default AuthorizationQuery;
