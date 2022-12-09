import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        top: 0,
        left: 0,
        opacity: 0.5,
        alignItems: "center",
        background: "none repeat scroll 0 0 black",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
