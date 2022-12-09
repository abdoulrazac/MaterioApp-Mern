import React from "react";
import { GoogleLogout } from "react-google-login";
import LocalStorageService from "../../Services/LocalStorageService";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  // const navigate = useNavigate;
  const onSuccess = (res) => {
    LocalStorageService.clearToken();

    // navigate("/");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="logout"
        onLogoutSuccess={onSuccess}
        isSignedIn={false}
      />
    </div>
  );
};
