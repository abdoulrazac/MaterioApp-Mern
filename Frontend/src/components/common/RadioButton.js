import { Box } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import TextError from "./TextError";

export default function RadioButtons(props) {
  const { label, name, options, ...rest } = props;

  return (
    <Box sx={{ marginTop: "20px" }}>
      <label>{label}</label>
      <Field as="radio" id={name} name={name} {...rest}>
        {({ field }) => {
          // console.log("field", field);
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </Box>
  );
}
