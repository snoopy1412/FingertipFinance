import useAddress from "@/hooks/useAddress";
import {
  Form,
  TextArea,
  Cascader,
  Picker,
  Cell,
  Address,
} from "@nutui/nutui-react-taro";
import Select from "@/components/Select";
import { Right } from "@nutui/icons-react-taro";
import { useState, forwardRef, useImperativeHandle } from "react";
import { educationOptions, degreeOptions } from "@/constants/profile";

const optionsDemo = [
  {
    value1: "浙江",
    text1: "浙江",
    items: [
      {
        value1: "杭州",
        text1: "杭州",
        disabled: true,
        items: [
          { value1: "西湖区", text1: "西湖区", disabled: true },
          { value1: "余杭区", text1: "余杭区" },
        ],
      },
      {
        value1: "温州",
        text1: "温州",
        items: [
          { value1: "鹿城区", text1: "鹿城区" },
          { value1: "瓯海区", text1: "瓯海区" },
        ],
      },
    ],
  },
  {
    value1: "湖南",
    text1: "湖南",
    disabled: true,
    items: [
      {
        value1: "长沙",
        text1: "长沙",
        disabled: true,
        items: [
          { value1: "西湖区", text1: "西湖区" },
          { value1: "余杭区", text1: "余杭区" },
        ],
      },
      {
        value1: "温州",
        text1: "温州",
        items: [
          { value1: "鹿城区", text1: "鹿城区" },
          { value1: "瓯海区", text1: "瓯海区" },
        ],
      },
    ],
  },
  {
    value1: "福建",
    text1: "福建",
    items: [
      {
        value1: "福州",
        text1: "福州",
        items: [
          { value1: "鼓楼区", text1: "鼓楼区" },
          { value1: "台江区", text1: "台江区" },
        ],
      },
    ],
  },
];

interface ProfileFormProps {
  onFinish: (values) => void;
}
const ProfileForm = forwardRef(({ onFinish }: ProfileFormProps, ref) => {
  const [form] = Form.useForm();

  const submitSucceed = (values) => {
    console.log(values);
    onFinish && onFinish(values);
  };
  useImperativeHandle(ref, () => {
    return form;
  });

  return (
    <>
      <Form
        labelPosition="right"
        onFinish={(values) => submitSucceed(values)}
        form={form}
      >
        <Form.Item
          label="学历"
          name="education"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择学历" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => {
            return args[1];
          }}
          onClick={(event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[educationOptions]}>
            {(value: any) => {
              return <Select options={educationOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="学位"
          name="degree"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择学位" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[degreeOptions]}>
            {(value: any) => {
              return <Select options={degreeOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="现居地址"
          name="address"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择现居地址" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            ref.open();
          }}
        >
          {/* TODO 缺少接口，未编写此代码 */}
          <Address options={optionsDemo} title="选择地址" />
        </Form.Item>

        <Form.Item
          label="详细地址"
          name="detailAddress"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请输入详细地址" }]}
        >
          <TextArea placeholder="请输入详细地址" maxLength={200} />
        </Form.Item>
      </Form>
    </>
  );
});

export default ProfileForm;
