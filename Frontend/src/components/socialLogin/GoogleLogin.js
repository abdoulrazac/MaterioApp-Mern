import React from "react";
import { GoogleLogin } from "react-google-login";
import LocalStorageService from "../../Services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { LoginFb } from "./fbLogin";
import { Box } from "@mui/material";
import "./login.css";
export const GoogleLogin1 = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    LocalStorageService.setCurrentUser(res.profileObj);
    //navigate("/home");
  };
  const onFailure = (res) => {
    console.log("login failed! res:", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="sign in with google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};
