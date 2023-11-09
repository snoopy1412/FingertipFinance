import UploadIdCardItem from "./UploadIdCardItem";
import { View } from "@tarojs/components";
import IdCardFrontIcon from "@/assets/idCardFront.jpg";
import IdCardBackIcon from "@/assets/IdCardBack.jpg";
import styles from "./UploadIdCard.module.scss";

const UploadIdCard = () => {
  const handleUpload = ({ type, file }) => {
    console.log("file", file);
  };
  return (
    <View className={styles.container}>
      <UploadIdCardItem
        title="头像面"
        description="上传您的身份证头像面"
        imageBackgroundUrl={IdCardFrontIcon}
        onUpload={(file) => {
          handleUpload({
            type: "front",
            file,
          });
        }}
      />
      <UploadIdCardItem
        title="国徽面"
        description="上传您的身份证国徽面"
        imageBackgroundUrl={IdCardBackIcon}
        onUpload={(file) => {
          handleUpload({
            type: "front",
            file,
          });
        }}
      />
    </View>
  );
};
export default UploadIdCard;
