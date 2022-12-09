import React, { useEffect, useState } from "react";
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
  FormHelperText,
  Link,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import logImg from "./../.././assets/logimg.jpg";
import logImg1 from "./../.././assets/logimg1.jpg";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../Services/AxiosService";
import { GoogleLogin1 } from "../../components/socialLogin/GoogleLogin";
import { Logout } from "../../components/socialLogin/GoogleLogout";
import { useDispatch } from "react-redux";
import { snackBar } from "../../Store/Slice/commonSlice";
import LocalStorageService from "../../Services/LocalStorageService";
import { useTranslation } from "react-i18next";
import { LoginFb } from "../../components/socialLogin/fbLogin";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Login() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  // social Login
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const Navigate = useNavigate();

  const [initialValues, setinitialValues] = useState({
    email: "",
    password: "",
    CheckboxOptions: [],
  });
  const CheckboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: " Option 2", value: "cOption2" },
    { key: " Option 3", value: "cOption3" },
  ];
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
    CheckboxOptions: Yup.array().required("checkboxOption is Required"),
  });
  const onSubmit = (values) => {
    LocalStorageService.setCurrentUser(values.email);
    postRequest("/login", values)
      .then((res) => {
        console.log(res, "response");
        dispatch(
          snackBar({
            status: true,
            severity: "success",
            message: `${res.data.message}`,
          })
        );
        LocalStorageService.setToken(res.data.data.token);
        LocalStorageService.setRefreshToken(res.data.data.refreshToken);

        Navigate("/dashboard");
      })

      .catch((error) => {
        console.log("something missing", error);
        dispatch(
          snackBar({
            status: true,
            severity: "error",
            message: "username or password is invalid",
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
          backgroundColor: "#ededed",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: " center",
          padding: "20px",
          // backgroundImage: `url(${logImg})`,
          // boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
            CheckboxOptions: [],
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleBlur, handleChange, values, errors, touched, isValid }) => (
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
                  {/* MATERIO */}
                  {t("why.3")}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {/* Welcome to Materio! 👋🏻 */}
                  {t("why.2")}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {/* Please sign-in to your account and start the adventure */}

                  {t("why.1")}
                </Typography>
                <FormikControl
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

                {/* <FormikControl
                  sx={{ marginTop: "30px" }}
                  control="checkbox"
                  label="remeber me"
                  name="CheckboxOptions"
                  options={CheckboxOptions}
                  onChange={handleChange}
                  value={values.CheckboxOptions}
                  onBlur={handleBlur}
                /> */}

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    marginLeft: "70px",
                  }}
                >
                  <Checkbox name="checkbox" size="small" {...label} />
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      color: "grey",
                    }}
                  >
                    {/* remember me */}
                    {t("thanks.4")}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ fontSize: "12px", marginLeft: "25px" }}
                  >
                    Forgot Password?
                  </Link>
                </Box>
                {/* <Button
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                  }}
                  disabled={!isValid}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button> */}

                <FormikControl
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                    color: "white",
                  }}
                  label="login"
                  control="button"
                  type="submit"
                />
                <Box>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ marginTop: "20px", fontSize: "12px" }}
                  >
                    {/* new on our platform? */}
                    {t("thanks.3")}
                    <Link
                      onClick={() => Navigate("/signup")}
                      sx={{
                        fontSize: "12px",
                        marginLeft: "5px",
                      }}
                    >
                      Create an account
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
                  {/* <Link
                    href="https://www.facebook.com/"
                    underline="none"
                    target="_blank"
                  >
                    <LoginFb />
                  </Link> */}

                  <LoginFb />
                  {/* <Link
                    href="https://twitter.com/i/flow/login"
                    underline="none"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </Link>
                  <Link
                    href="http://instagram.com"
                    underline="none"
                    target="_blank"
                  >
                    <GitHubIcon sx={{ color: "black" }} />
                  </Link> */}
                  {/* <Link
                    href="http://instagram.com"
                    underline="none"
                    target="_blank"
                  >
                    <GoogleIcon sx={{ color: "red" }} />
                    
                  </Link> */}

                  <GoogleLogin1 />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
        <Box sx={{ mt: 3 }}></Box>
      </Container>
    </>
  );
}
