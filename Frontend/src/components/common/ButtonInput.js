import React from "react";
import { Box, Button } from "@mui/material";
function ButtonInput(props) {
  const { label, contained, name, ...rest } = props;
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Button sx={{ width: "100%" }} variant={contained} {...rest}>
        {label}
      </Button>
    </Box>
  );
}

export default ButtonInput;
