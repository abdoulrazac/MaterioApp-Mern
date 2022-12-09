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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LocalStorageService from "../../Services/LocalStorageService";
import { postRequest } from "../../Services/AxiosService";
import { snackBar } from "../../Store/Slice/commonSlice";

// import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function ResetPass() {
  // const Navigate = useNavigate();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialValues, setinitialValues] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const validationSchema = Yup.object({
    newpassword: Yup.string()
      .min(8, "password must be atleast 8 characters")
      .required("Password is required")
      .matches(
        RegexTypes.passwordRegex,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "passwords must match")
      .required("confirm password is required"),
  });
  const token = LocalStorageService.getAccessToken();
  const onSubmit = (values) => {
    postRequest(`resetPassword ?token=${token}`, values)
      .then((res) => {
        console.log("password chnaged...", res);
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
            newpassword: "",
            confirmpassword: "",
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
                  MATERIO
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Welcome to Materio! 👋🏻
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Reset Password
                </Typography>

                <FormikControl
                  control="input"
                  label="NewPassword"
                  name="newpassword"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                <FormikControl
                  sx={{ marginTop: "20px" }}
                  size="small"
                  control="input"
                  label="Confirm Password"
                  name="confirmpassword"
                  type="password"
                  onChange={handleChange}
                  value={values.confirmpassword}
                  onBlur={handleBlur}
                  placeholder="ConfirmPassword"
                />

                {/* <FormGroup>
                  <FormControlLabel
                    control={<Checkbox {...label} />}
                    label="Remember me"
                  />
                </FormGroup> */}

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
                    I agree to privacy policy & terms
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
                  Submit
                </Button> */}
                <FormikControl
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "purple",
                    width: "60%",
                    color: "white",
                  }}
                  label="Submit"
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
