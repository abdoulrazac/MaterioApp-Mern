import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Box, TextField } from "@mui/material";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <Box
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
      }}
    >
      {/* <label htmlFor={name}>{label}</label> */}
      {/* <Field id={name} name={name} {...rest} /> */}

      <TextField size="small" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Box>
  );
}

export default Input;
