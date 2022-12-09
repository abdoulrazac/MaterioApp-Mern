import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import RegexTypes from "./.././../Regex/RegexFile";
import FormikControl from "../../components/common/FormControl";
import pose from "../../assets/pose.png";
import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { snackBar } from "../../Store/Slice/commonSlice";
import { postRequest } from "../../Services/AxiosService";
import LocalStorageService from "../../Services/LocalStorageService";
export const SetNewpass = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [initialValues, setinitialValues] = useState({
    currentpassword: "",
    newpassword: "",
    confirmnewpassword: "",
  });
  const validationSchema = Yup.object({
    currentpassword: Yup.string()
      .required("currentpassword is Required")
      .matches(
        RegexTypes.passwordRegex,
        "currentpassword you entered is invalid"
      ),

    newpassword: Yup.string()
      .min(8, "password must be atleast 8 characters")
      .required("Password is required")
      .matches(
        RegexTypes.passwordRegex,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmnewpassword: Yup.string()
      .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
      .required("confirmPassword is Required"),
  });
  const token = LocalStorageService.getAccessToken();
  const onSubmit = (values) => {
    const Data = {
      email: LocalStorageService.getCurrentUser(),
      password: values.password,
    };
    postRequest("/changepassword", Data)
      .then((res) => {
        console.log("password changed...", res);
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
            message: "something went wrong",
          })
        );
      });
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={{
        currentpassword: "",
        newpassword: "",
        confirmnewpassword: "",
      }}
      onSubmit={(values) => {
        const Data = {
          email: LocalStorageService.getCurrentUser(),
          password: values.newpassword,
        };
        postRequest("/changepassword", Data)
          .then((res) => {
            console.log("password changed...", res);
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
                message: "something went wrong",
              })
            );
          });
        console.log("Form data", values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleBlur, handleChange, values, errors, touched, isValid }) => (
        <Form>
          {console.log("valuuess 9999", JSON.stringify(errors))}
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={6}
                sx={{
                  ".MuiTextField-root": { width: "100%" },
                }}
              >
                <FormikControl
                  control="input"
                  type="password"
                  name="currentpassword"
                  label="currentpassword"
                  onChange={handleChange}
                  value={values.currentpassword}
                  onBlur={handleBlur}
                  placeholder="Current password"
                />
                <FormikControl
                  sx={{ mt: 3 }}
                  control="input"
                  type="password"
                  name="newpassword"
                  label="Newpassword"
                  onChange={handleChange}
                  value={values.newpassword}
                  onBlur={handleBlur}
                  placeholder="newpassword"
                />
                <FormikControl
                  sx={{ mt: 3 }}
                  control="input"
                  type="password"
                  name="confirmnewpassword"
                  label="Confirmnewpassword"
                  onChange={handleChange}
                  value={values.confirmnewpassword}
                  onBlur={handleBlur}
                  placeholder="confirmnewpassword"
                />
                <Box sx={{ display: "flex", gap: "10px", mt: 4 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "purple" }}
                  >
                    Save Changes
                  </Button>
                  <Button variant="outlined">reset</Button>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <img src={pose} style={{ width: "183px", height: "256px" }} />
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
