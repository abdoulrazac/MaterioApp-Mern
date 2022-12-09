import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Box } from "@mui/material";
function ConfirmPassword(props) {
  const { label, name, ...rest } = props;
  return (
    <Box>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Box>
  );
}

export default ConfirmPassword;
