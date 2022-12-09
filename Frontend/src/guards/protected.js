import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "../pages/protected/Dashboard";
import LocalStorageService from "../Services/LocalStorageService";
export const Protected = () => {
  let auth = LocalStorageService.getAccessToken();
  return auth ? (
    <Dashboard>
      <Outlet />
    </Dashboard>
  ) : (
    <Navigate to="/login" />
  );
};
