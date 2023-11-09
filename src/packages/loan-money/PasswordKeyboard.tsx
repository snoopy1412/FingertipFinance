import { NumberKeyboard, Grid } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { findLastIndex } from "lodash-es";
import { CircleClose } from "@nutui/icons-react-taro";

const PasswordKeyboard = ({ visible, onClose, onConfirm, title }) => {
  const [passwordList, setPasswordList] = useState<any[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const handleChange = (v) => {
    const index = passwordList.findIndex((item) => item === "");
    if (index < 6) {
      setPasswordList(
        passwordList.map((item, i) => {
          if (i === index) {
            item = v;
          }
          return item;
        })
      );
    }
  };

  const handleDelete = () => {
    const index = findLastIndex(passwordList, (item) => item !== "");
    if (index > -1) {
      setPasswordList(
        passwordList.map((item, i) => {
          if (i === index) {
            item = "";
          }
          return item;
        })
      );
    }
  };
  useEffect(() => {
    if (passwordList.length === 6 && !passwordList.some((v) => v === "")) {
      onConfirm(passwordList.join(""));
    }
  }, [passwordList]);

  return (
    <NumberKeyboard
      visible={visible}
      title={
        <View style={{ width: "100%" }}>
          <View>
            <Text>{title}</Text>
            <CircleClose onClick={onClose} />
          </View>
          <Grid direction="horizontal">
            {passwordList.map((v, i) => {
              return <Grid.Item text={v} key={i}></Grid.Item>;
            })}
          </Grid>
        </View>
      }
      custom={["."]}
      onChange={handleChange}
      onDelete={handleDelete}
      onClose={onClose}
    />
  );
};
export default PasswordKeyboard;
