import {
  Form,
  TextArea,
  Picker,
  Address,
  Input,
} from "@nutui/nutui-react-taro";
import Select from "@/components/Select";
import { forwardRef, useImperativeHandle } from "react";
import {
  bankCardOptions,
  loanPurposeOptions,
  repaymentMethodOptions,
} from "@/constants/loan";
import { phoneValidator } from "@/utils/validate";

interface ProfileFormProps {
  onFinish: (values) => void;
}
const LoanForm = forwardRef(({ onFinish }: ProfileFormProps, ref) => {
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
          label="贷款用途"
          name="education"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => {
            return args[1];
          }}
          onClick={(event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[loanPurposeOptions]}>
            {(value: any) => {
              return <Select options={loanPurposeOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="还款方式"
          name="degree"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择还款方式" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[repaymentMethodOptions]}>
            {(value: any) => {
              return <Select options={repaymentMethodOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="银行卡"
          name="address"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择银行卡" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[bankCardOptions]}>
            {(value: any) => {
              return <Select options={bankCardOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>

        <Form.Item label="推荐人工号" name="emergencyContact">
          <Input placeholder="请输入工号（非必填）" maxLength={100} />
        </Form.Item>

        <Form.Item
          label="紧急联系人"
          name="emergencyContact"
          rules={[{ required: true, message: "请输入紧急联系人姓名" }]}
        >
          <Input placeholder="请输入紧急联系人姓名" maxLength={100} />
        </Form.Item>
        <Form.Item
          label="紧急联系人手机号"
          name="emergencyContactPhone"
          rules={[
            { required: true, message: "请输入紧急联系人手机号" },
            { validator: phoneValidator, message: "手机号码格式不正确" },
          ]}
        >
          <Input placeholder="请输入紧急联系人手机号" maxLength={100} />
        </Form.Item>

        <Form.Item
          label="法律文件送达地址"
          name="address"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请输入法律文件送达地址" }]}
        >
          <TextArea placeholder="请输入法律文件送达地址" maxLength={200} />
        </Form.Item>
      </Form>
    </>
  );
});

export default LoanForm;
