import React from "react";
import FormikControl from "../pages/FormikControl";
import RegexTypes from "../../Regex/RegexFile";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Box, Button, Grid, Typography } from "@mui/material";
import Logimg from "../../assets/login.jpg";

export const ForgotPass = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is Required")
      .matches(RegexTypes.emailRegex, "email you entered is invalid"),
    password: Yup.string()
      .min(8, "password must be atleast 8 characters")
      .required("Password is required")
      .matches(
        RegexTypes.passwordRegex,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6} sx={{ height: "90vh", marginTop: "10rem" }}>
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Forgot Password
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <FormikControl
                      sx={{
                        display: " flex",
                        flexDirection: "column",
                      }}
                      control="input"
                      type="email"
                      label="Email"
                      name="email"
                      placeholder="enter email"
                    />
                    <FormikControl
                      sx={{
                        display: " flex",
                        flexDirection: "column",
                      }}
                      control="input"
                      type="password"
                      label="enter new Password"
                      name="password"
                      placeholder="enter new password"
                    />
                    <Button
                      sx={{ marginTop: "20px" }}
                      type="submit"
                      disabled={!formik.isValid}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            backgroundImage: `url(${Logimg})`,
            height: "90vh",
            marginTop: 20,
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};
