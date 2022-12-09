import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { snackBar } from "../../Store/Slice/commonSlice";
import snackbarStatus from "../../Store/Slice/commonSlice";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {
  // const openSnackBar = useSelector((state) => state.loader.snackbarStatus);
  const snakeMsg = useSelector((state) => state.loader.snackbarStatus);

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      snackBar({
        ...snakeMsg,
        status: false,
      })
    );
    setOpen(false);
  };
  // console.log("opennsnack", openSnackBar);
  return (
    <Snackbar
      open={snakeMsg.status}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={snakeMsg.severity}
        sx={{ width: "100%" }}
      >
        {snakeMsg.message}
      </Alert>
    </Snackbar>
  );
}
