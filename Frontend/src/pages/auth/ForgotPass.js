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
import logImg from "./../.././assets/logimg.jpg";
import logImg1 from "./../.././assets/logimg1.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../Services/AxiosService";
import { snackBar } from "../../Store/Slice/commonSlice";
import { useTranslation } from "react-i18next";

// import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function ForgotPass() {
  const { t, i18n } = useTranslation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  //const snakeMsg = useSelector((state) => state.loader.snackbarStatus);
  const [initialValues, setinitialValues] = useState({
    email: "",
  });
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is Required")
      .matches(RegexTypes.emailRegex, "email you entered is invalid"),
  });
  const onSubmit = (values) => {
    postRequest("forgetPassword", values)
      .then((res) => {
        console.log("user is successfully registered...", res);
        dispatch(
          snackBar({
            status: true,
            severity: "success",
            message: `${res.data.message}`,
          })
        );
        // Navigate("/login");
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
    console.log("Form data", values);
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
            email: "",
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
                  {/* MATERIO */}
                  {t("why.3")}
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {/* ForgotPassword */}
                  {t("why.forgotpass")}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {t("why.subhead")}
                  {/* Please sign-in to your account and start the adventure */}
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

                {/* <Box
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
                    }}
                  >
                    
                  </Typography>
                </Box> */}
                {/* <Button
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button> */}
                <FormikControl
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                    color: "white",
                  }}
                  label="submit"
                  control="button"
                  type="submit"
                />
                <Box>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ marginTop: "20px", fontSize: "12px" }}
                  >
                    new on our platform?
                    <Link
                      // onClick={() => Navigate("/signup")}
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
