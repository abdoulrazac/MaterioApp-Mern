import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Box, TextField } from "@mui/material";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <Box>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </Box>
  );
}

export default CheckboxGroup;
