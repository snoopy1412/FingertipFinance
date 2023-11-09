import { Form, Picker, Input } from "@nutui/nutui-react-taro";
import Select from "@/components/Select";
import { forwardRef, useImperativeHandle } from "react";
import { bankCardOptions, loanPeriodOptions } from "@/constants/loan";

interface ProfileFormProps {
  onFinish: (values) => void;
}
const LoanForm = forwardRef(({ onFinish }: ProfileFormProps, ref) => {
  const [form] = Form.useForm();

  const submitSucceed = (values) => {
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
          label="用款金额"
          name="txamt"
          rules={[{ required: true, message: "请输入用款金额" }]}
        >
          <Input placeholder="请输入用款金额" maxLength={100} />
        </Form.Item>
        <Form.Item
          label="借款期限"
          name="degree"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择借款期限" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(_event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[loanPeriodOptions]}>
            {(value: any) => {
              return <Select options={loanPeriodOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="银行卡号"
          name="accountno"
          validateTrigger="onSubmit"
          rules={[{ required: true, message: "请选择银行卡" }]}
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(_event, ref: any) => {
            ref.open();
          }}
        >
          <Picker options={[bankCardOptions]}>
            {(value: any) => {
              return <Select options={bankCardOptions} value={value} />;
            }}
          </Picker>
        </Form.Item>
      </Form>
    </>
  );
});

export default LoanForm;
