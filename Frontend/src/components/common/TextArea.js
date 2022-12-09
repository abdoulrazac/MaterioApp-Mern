import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Box, TextareaAutosize, TextField } from "@mui/material";
function TextArea(props) {
  const { label, name, ...rest } = props;
  return (
    <Box sx={{ marginTop: "20px" }}>
      {/* <label htmlFor={name}>{label}</label> */}
      {/* <Field id={name} name={name} {...rest} /> */}

      {/* <TextField size="small" name={name} {...rest} /> */}
      <TextareaAutosize
        minRows={3}
        style={{ width: 230 }}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </Box>
  );
}

export default TextArea;
