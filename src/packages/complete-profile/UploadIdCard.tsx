import UploadIdCardItem from "./UploadIdCardItem";
import { View } from "@tarojs/components";
import IdCardFrontIcon from "@/assets/idCardFront.jpg";
import IdCardBackIcon from "@/assets/IdCardBack.jpg";
import Taro from "@tarojs/taro";

const chooseImage = () => {
  Taro.chooseImage({
    count: 1,
    sizeType: ["original", "compressed"],
    sourceType: ["album", "camera"],
    success: function (res) {
      console.log(res);

      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
    },
  });
};

const UploadIdCard = () => {
  const handleChooseImage = ({ type }: { type: "front" | "back" }) => {
    switch (type) {
      case "front":
        chooseImage();
        break;
      case "back":
        chooseImage();
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <UploadIdCardItem
        title="头像面"
        description="上传您的身份证头像面"
        imageBackgroundUrl={IdCardFrontIcon}
        onClick={() => {
          handleChooseImage({
            type: "front",
          });
        }}
      />
      <UploadIdCardItem
        title="国徽面"
        description="上传您的身份证国徽面"
        imageBackgroundUrl={IdCardBackIcon}
        onClick={() => {
          handleChooseImage({
            type: "back",
          });
        }}
      />
    </View>
  );
};
export default UploadIdCard;
