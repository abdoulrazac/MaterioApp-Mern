import React, { useEffect, useState } from "react";
import admin from "../../assets/admin.png";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Box, Button, CardContent, Grid, Typography } from "@mui/material";
import RegexTypes from "../../Regex/RegexFile";
import FormikControl from "../../components/common/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, snackBar } from "../../Store/Slice/commonSlice";
import { getRequest, putRequest } from "../../Services/AxiosService";
import { useReducer } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.loader.userId);
  console.log("useerrr", UserId);

  React.useEffect(() => {
    return () => {
      getRequest(`/profile/${UserId}`).then((res) => {
        setUser(res.data);
        console.log(res);
      });
    };
  }, []);
  const DropdownOptions = [
    { key: "select an option", value: "slect" },
    { key: "admin", value: "option1" },
    { key: "author", value: "option2" },
    { key: "editor", value: "option3" },
  ];

  const statusOptions = [
    { key: "active", value: "rOption1" },
    { key: "inactive", value: "rOption2" },
    { key: "pending", value: "rOption3" },
  ];
  const [initialValues, setinitialValues] = React.useState({
    firstname: "",
    lastname: "",
    address: "",
    role: "",
    status: "",
    language: "",
  });
  const validationSchema = Yup.object({
    firstname: Yup.string().required("username is Required"),
    lastname: Yup.string().required("name is Required"),
    address: Yup.string().required("adress is Required"),

    role: Yup.string().required(" selectOption is Required"),
    status: Yup.string().required("please select status"),
    language: Yup.string().required("mention your language please"),
  });
  const onSubmit = (values) => {
    const data = {
      firstname: values.firstName,
      lastname: values.lastName,
      address: values.address,
      role: "",
      status: "",
      language: values.language,
    };
    putRequest(`/profile/${UserId}`)
      .then((res) => {
        dispatch(
          snackBar({
            status: true,
            severity: "success",
            message: res.message,
          })
        );
      })
      .catch((error) => {
        console.log("something missing", error);
        dispatch(
          snackBar({
            status: true,
            severity: "error",
            message: error.message,
          })
        );
      });
  };
  return (
    <Formik
      initialValues={{
        firstname: user?.firstName,
        lastname: user?.lastName,
        address: user?.address,
        role: "",
        status: "",
        language: user?.language,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
      {({ handleBlur, handleChange, values, errors, touched }) => (
        <Form>
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <img
                    src={admin}
                    style={{ width: "120px", height: "120px" }}
                  />
                  <Box sx={{ marginTop: "10px" }}>
                    <Button
                      sx={{
                        alignSelf: "center",
                        backgroundColor: "purple",
                      }}
                      size="small"
                      variant="contained"
                    >
                      Upload New Photo
                    </Button>
                    {/* <Button
                      sx={{ alignSelf: "center", marginLeft: "10px" }}
                      color="error"
                      size="small"
                      variant="outlined"
                      type="reset"
                    >
                      Reset
                    </Button> */}
                    <Typography variant="body2" sx={{ color: "gray", mt: 3 }}>
                      Allowed PNG or JPEG. Max size of 800K.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  ".MuiTextField-root": { width: "100%" },
                }}
              >
                <FormikControl
                  sx={{
                    mt: 3,
                  }}
                  control="input"
                  type="text"
                  name="firstname"
                  label="firstname"
                  onChange={handleChange}
                  value={values.firstname}
                  onBlur={handleBlur}
                  placeholder="john doe"
                />
                <FormikControl
                  sx={{
                    mt: 3,
                  }}
                  control="input"
                  type="text"
                  name="address"
                  label="address"
                  onChange={handleChange}
                  value={values.address}
                  onBlur={handleBlur}
                  placeholder="johndoe@example.com"
                />
                <FormikControl
                  sx={{
                    mt: 3,
                  }}
                  control="select"
                  type="text"
                  name="status"
                  label="status"
                  options={statusOptions}
                  onChange={handleChange}
                  value={values.status}
                  onBlur={handleBlur}
                />
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <Button
                    type="submit"
                    sx={{ backgroundColor: "purple", mt: 3 }}
                    variant="contained"
                  >
                    Save Changes
                  </Button>
                  <Button type="reset" sx={{ mt: 3 }} variant="outlined">
                    Reset
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  ".MuiTextField-root": { width: "100%" },
                }}
              >
                <FormikControl
                  sx={{
                    mt: 3,
                  }}
                  control="input"
                  type="text"
                  name="lastname"
                  label="lastname"
                  onChange={handleChange}
                  value={values.lastname}
                  onBlur={handleBlur}
                  placeholder="lastname"
                />

                <FormikControl
                  sx={{
                    mt: 3,
                  }}
                  control="select"
                  type="text"
                  name="role"
                  label="Role"
                  options={DropdownOptions}
                  onChange={handleChange}
                  value={values.role}
                  onBlur={handleBlur}
                  placeholder="role"
                />
                <FormikControl
                  sx={{
                    mt: 3,
                  }}
                  control="input"
                  type="text"
                  name="language"
                  label="language"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.language}
                  onBlur={handleBlur}
                  placeholder="language"
                />
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};




