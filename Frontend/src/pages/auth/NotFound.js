import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login", { state: "error not page" });
    }, 1000);
  }, []);
  return (
    <Typography sx={{ fontWeight: "bold" }} variant="h4">
      oops! No Page Found
    </Typography>
  );
};
