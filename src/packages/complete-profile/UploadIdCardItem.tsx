import { View, Text } from "@tarojs/components";
import { Image } from "@nutui/nutui-react-taro";
import styles from "./UploadIdCard.module.scss";
import Taro from "@tarojs/taro";
import { useEffect, useMemo, useState } from "react";

/**
 * 文件上传
 */
const chooseImage = () => {
  return new Promise((resolve, reject) => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: resolve,
      fail: reject,
    });
  });
};

interface UploadIdCardItemProps {
  title: string;
  description: string;
  imageBackgroundUrl: string;
  onUpload: (file) => void;
}

const UploadIdCardItem = ({
  title = "头像面",
  description = "上传您的身份证头像面",
  imageBackgroundUrl,
  onUpload,
}: UploadIdCardItemProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleClick = () => {
    chooseImage().then((res: any) => {
      const tempFilePath = res.tempFilePaths?.[0];
      setImageUrl(tempFilePath);
      onUpload(tempFilePath);
    });
  };

  const previewImage = useMemo(() => {
    return imageUrl || imageBackgroundUrl;
  }, [imageUrl, imageBackgroundUrl]);

  // 清除图片
  useEffect(() => {
    return () => {
      setImageUrl("");
    };
  }, []);

  return (
    <View className={styles.cardItem}>
      <View className={styles.cardInfo}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.description}>{description}</Text>
      </View>
      <View className={styles.imageContainer} onClick={handleClick}>
        <Image src={previewImage} className={styles.image} mode="aspectFill" />
      </View>
    </View>
  );
};

export default UploadIdCardItem;
