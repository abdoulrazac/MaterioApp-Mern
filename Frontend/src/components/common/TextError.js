import { Box } from "@mui/material";
import React from "react";

function TextError(props) {
  return <Box sx={{ color: "red" }}>{props.children}</Box>;
}

export default TextError;
