import React from "react";
import CheckboxGroup from "../common/CheckBox";
import Input from "../common/Input";
import RadioButtons from "../common/RadioButton";

import Password from "../common/Password";
import ConfirmPassword from "../common/ConfirmPassword";
import ButtonInput from "./ButtonInput";
import TextArea from "./TextArea";
import Select from "./Select";
function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;

    case "Password":
      return <Password {...rest} />;
    case "confirmPassword":
      return <ConfirmPassword {...rest} />;
    case "button":
      return <ButtonInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
