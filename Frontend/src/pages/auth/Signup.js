import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import RegexTypes from "../../Regex/RegexFile";
import FormikControl from "../../components/common/FormControl";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Link,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { snackBar } from "../../Store/Slice/commonSlice";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../Services/AxiosService";
import { Axios } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function SignUp() {
  const { t, i18n } = useTranslation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  //const snakeMsg = useSelector((state) => state.loader.snackbarStatus);
  const [initialValues, setinitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneno: "",
    address: "",
  });
  const validationSchema = Yup.object({
    firstName: Yup.string().required("firstName is Required"),
    lastName: Yup.string().required("lastName is Required"),
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
    phoneno: Yup.string()
      .required("please enter your phone number")
      .max(10, "value does not exceed 10 characters")
      .matches(RegexTypes.phoneNumberRegex, "phoneno you entered is invalid"),
    address: Yup.string().required("address is Required"),
  });
  const onSubmit = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      phoneno: values.phoneno,
      address: values.address,
    };

    postRequest("signup", data)
      .then((res) => {
        console.log("user is successfully registered...", res);
        dispatch(
          snackBar({
            status: true,
            severity: "success",
            message: `${res.data.message}`,
          })
        );
        Navigate("/login");
      })
      .catch((error) => {
        console.log("something missing", error);
        dispatch(
          snackBar({
            status: true,
            severity: "error",
            message: `${error?.response?.data?.message}`,
          })
        );
      });
  };
  return (
    <>
      <Container
        maxWidth="xs"
        component="main"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: " center",
          padding: "20px",
        }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneno: "",
            address: "",
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleBlur, handleChange, values, errors, touched }) => (
            <Form>
              {console.log("valuuess 9999", JSON.stringify(errors))}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", marginTop: "50px" }}
                >
                  {t("why.3")}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {/* Adventure starts here 🚀 */}
                  {t("thanks.5")}
                </Typography>
                <Typography
                  sx={{ fontSize: "13px", color: "gray" }}
                  variant="body2"
                  gutterBottom
                >
                  {/* Make your app management easy and fun! */}
                  {t("thanks.6")}
                </Typography>
                <FormikControl
                  sx={{ marginTop: "10px" }}
                  control="input"
                  type="text"
                  name="firstName"
                  label="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  placeholder="First name"
                />
                <FormikControl
                  sx={{ marginTop: "20px" }}
                  control="input"
                  type="text"
                  name="lastName"
                  label="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  placeholder="Last name"
                />

                <FormikControl
                  sx={{ marginTop: "20px" }}
                  control="input"
                  type="text"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  placeholder="Email"
                />

                <FormikControl
                  sx={{ marginTop: "20px" }}
                  control="input"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                <FormikControl
                  sx={{ marginTop: "20px" }}
                  control="textarea"
                  label="address"
                  name="address"
                  type="address"
                  onChange={handleChange}
                  value={values.address}
                  onBlur={handleBlur}
                  placeholder="Enter your ddress"
                />
                <FormikControl
                  sx={{ marginTop: "20px" }}
                  control="input"
                  label="phoneno"
                  name="phoneno"
                  type="phoneno"
                  onChange={handleChange}
                  value={values.phoneno}
                  onBlur={handleBlur}
                  placeholder="Enter your phoneno"
                />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    marginLeft: "70px",
                  }}
                >
                  <Checkbox size="small" {...label} />
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      color: "grey",
                      fontSize: "12px",
                    }}
                  >
                    {/* I agree to privacy policy & terms */}
                    {t("thanks.7")}
                  </Typography>
                </Box>
                {/* <Button
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Sign Up
                </Button> */}
                <FormikControl
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                    color: "white",
                  }}
                  label="Sign Up"
                  control="button"
                  type="submit"
                />
                <Box>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ marginTop: "20px", fontSize: "12px" }}
                  >
                    {/* registered? */}
                    {t("thanks.register")}
                    <Link
                      onClick={() => Navigate("/login")}
                      sx={{
                        fontSize: "12px",
                        marginLeft: "5px",
                      }}
                    >
                      Go to Login
                    </Link>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                >
                  <FacebookRoundedIcon sx={{ color: "blue" }} />
                  <TwitterIcon sx={{ color: "blue" }} />
                  <GitHubIcon />
                  <GoogleIcon sx={{ color: "red" }} />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
