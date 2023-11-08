import { Image } from "@tarojs/components";
import { Tabbar } from "@nutui/nutui-react-taro";
import CreditLimit from "@/assets/credit-limit.png";
import CreditLimitActive from "@/assets/credit-limit-active.png";
import { useRouter } from "@tarojs/taro";
import My from "@/assets/my.png";
import MyActive from "@/assets/my-active.png";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const items = [
  {
    title: "信用额度",
    icon: CreditLimit,
    activeIcon: CreditLimitActive,
    path: "/pages/index/index",
  },
  {
    title: "我的",
    icon: My,
    activeIcon: MyActive,
    path: "/pages/my/index",
  },
];

const FooterTabBar = () => {
  const router = useRouter();

  const [value, setValue] = useState(0);

  const handleSwitch = (index) => {
    setValue(index);
    Taro.navigateTo({
      url: items[index].path,
    });
  };

  useEffect(() => {
    const path = router?.path;
    const index = items.findIndex((item) => item.path === path);
    setValue(index);
  }, [router?.path]);

  return (
    <Tabbar fixed value={value} onSwitch={handleSwitch}>
      {items?.map((item, index) => {
        return (
          <Tabbar.Item
            key={index}
            title={item.title}
            icon={
              <Image
                src={value === index ? item?.activeIcon : item.icon}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            }
            // onClick={() => setValue(index)}
          />
        );
      })}
    </Tabbar>
  );
};
export default FooterTabBar;
