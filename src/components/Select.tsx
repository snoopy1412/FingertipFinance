import { Right } from "@nutui/icons-react-taro";
import { Cell } from "@nutui/nutui-react-taro";

export interface Option {
  text: string;
  value: string;
}
export interface SelectProps {
  options: Option[];
  placeholder?: string;
}

const Select = ({ options, value, placeholder = "请选择" }) => {
  return (
    <Cell
      style={
        {
          padding: 0,
          "--nutui-cell-divider-border-bottom": "0",
        } as any
      }
      className="nutui-cell--clickable"
      title={
        value.length
          ? options?.filter((po) => po.value === value[0])[0]?.text
          : placeholder
      }
      extra={
        <Right
          style={{
            fontSize: 12,
          }}
        />
      }
      align="center"
    />
  );
};

export default Select;
