import { getAvailableAddressList } from "@/api/address";
import { useSetState } from "ahooks";

interface FormState {
  province: string;
  provinceCode: number;
  city: string;
  cityCode: number;
  county: string;
  countyCode: number;
  street: string;
  streetCode: number;
  addressDetail: string;
}

const setAddressList = (data: any[], leaf = false) => {
  return data?.map((v) => {
    return {
      value: v?.regName,
      text: v?.regName,
      id: v?.regionId,
      leaf,
    };
  });
};

const useAddress = () => {
  const [formState, setFormState] = useSetState<FormState>({
    province: "",
    provinceCode: 0,
    city: "",
    cityCode: 0,
    county: "",
    countyCode: 0,
    street: "",
    streetCode: 0,
    addressDetail: "",
  });

  const handleChange = (key, value) => {
    setFormState({ [key]: value } as any);
  };

  const handleAddressChange = (selectValue, value) => {
    const [province, city, county, street] = value;
    setFormState({
      province: province?.text,
      provinceCode: province?.id,
      city: city?.text,
      cityCode: city?.id,
      county: county?.text,
      countyCode: county?.id,
      street: street?.text,
      streetCode: street?.id,
    } as any);
  };

  const validate = () => {
    return new Promise<any>((resolve, reject) => {
      const { province, city, county, street, addressDetail } = formState;

      if (!province || !city || !county || !street) {
        reject({
          status: "error",
          message: "请选择所在地区",
        });
      }
      if (!addressDetail) {
        reject({
          status: "error",
          message: "请填写详细地址",
        });
      }
      resolve({
        status: "success",
        message: "校验通过",
        data: formState,
      });
    });
  };

  const handleLoad = (node: any, resolve: (children: any) => void) => {
    if (node.root) {
      getAvailableAddressList("")?.then((res) => {
        if (res?.code === 200) {
          resolve(setAddressList(res?.data));
        }
      });
    } else {
      const { id, level } = node;

      getAvailableAddressList(id)?.then((res) => {
        if (res?.code === 200) {
          resolve(setAddressList(res?.data, level >= 4));
        }
      });
    }
  };
  return {
    formState,
    setFormState,
    handleChange,
    handleAddressChange,
    validate,
    handleLoad,
  };
};
export default useAddress;
