import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import LocalStorageService from "../Services/LocalStorageService";
export const Public = () => {
  let auth = LocalStorageService.getAccessToken();
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};
