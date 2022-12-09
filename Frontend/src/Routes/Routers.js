import { Route, Routes, useNavigate } from "react-router-dom";

import React from "react";
import { Protected } from "../guards/protected";
import { Public } from "../guards/public";
import SignUp from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import { NotFound } from "../pages/auth/NotFound";
import ForgotPass from "../pages/auth/ForgotPass";
import ResetPass from "../pages/auth/ResetPass";
import Dashboard from "../pages/protected/Dashboard";
import { DashboardContent } from "../pages/protected/DashboardContent";
import Profile from "../pages/protected/Profile";
import Movies from "../pages/protected/Movies";
import Users from "../pages/protected/Users";
import Followers from "../pages/protected/Followers";

export const AppRouters = () => {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth">
          <Route path=":id" element={<ForgotPass />} />
          <Route path="resetpassword" element={<ResetPass />} />
        </Route>
        {/* <Route element={<Public />}></Route> */}
        <Route element={<Protected />}>
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/" element={<DashboardContent />}>
            navigate("/login")
          </Route>
        </Route>
      </Routes>
    </>
  );
};
