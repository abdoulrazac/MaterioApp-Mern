// import { Box } from "@mui/material";
// import React from "react";
// import FacebookLogin from "react-facebook-login";
// import { useNavigate } from "react-router-dom";
// import LocalStorageService from "../../Services/LocalStorageService";
// export const LoginFb = () => {
//   const navigate = useNavigate();
//   const responseFacebook = (response) => {
//     const user = {
//       email: response.email,
//       name: response.name,
//       imageurl: response.picture.data,
//     };
//     LocalStorageService.setCurrentUser(user);
//     // navigate("/home");
//   };
//   return (
//     <Box sx={{ mt: 2 }}>
//       <FacebookLogin
//         size="small"
//         appId="1156915711890954"
//         autoLoad={false}
//         fields="name,email,picture"
//         callback={responseFacebook}
//       />
//     </Box>
//   );
// };

import FacebookLogin from "@greatsumini/react-facebook-login";
import { Box } from "@mui/system";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginFb = () => {
  const onSuccess = (response) => {
    console.log("Login Success!", response);
  };
  const onFail = (error) => {
    console.log("Login Failed!", error);
  };
  const onProfileSuccess = (response) => {
    console.log("Get Profile Success!", response);
  };
  const navigate = useNavigate();
  return (
    <Box>
      <FacebookLogin
        appId="1156915711890954"
        style={{
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "12px 12px",
          border: "none",
        }}
        onSuccess={onSuccess}
        onFail={onFail}
        onProfileSuccess={onProfileSuccess}
      />
    </Box>
  );
};
