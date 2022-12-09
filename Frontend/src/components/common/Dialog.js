import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { postRequest } from "../../Services/AxiosService";
import { useDispatch, useSelector } from "react-redux";
import { snackBar } from "../../Store/Slice/commonSlice";
const CustomDialog = forwardRef((props, ref) => {
  const UserId = useSelector((state) => state.loader.userId);
  console.log("idd", UserId);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const {
    heading,
    Message,
    EnableStatus,
    toggleSwitch,
    SwitchOn,
    type,
    userId,
  } = props;
  const childRef = useRef();
  useImperativeHandle(ref, () => ({
    handleClickOpenDialog() {
      setOpen(true);
    },
  }));
  console.log("typppe", type);

  //   const handleClickOpenDialog = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
  };
  const data = {
    id: UserId,
    follow: "yes",
  };
  const followIt = () => {
    {
      type === "followUser"
        ? postRequest("/follow", data)
            .then((res) => {
              console.log(res);
              dispatch(
                snackBar({
                  status: true,
                  severity: "success",
                  message: res.data.message,
                })
              );
            })
            .catch((err) => {
              console.log("error", err);
              dispatch(
                snackBar({
                  status: true,
                  severity: "error",
                  message: data.err.message,
                })
              );
            })
        : EnableStatus(true);
      //SwitchOn(!toggleSwitch);
    }
  };

  const SnackRef = useRef();
  const openSnack = () => {
    SnackRef.current.handleClickOpen();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{heading}</DialogTitle>
        <Box
          sx={{
            top: "10px",
            position: "absolute",
            right: "10px",
            border: "1px solid",
            backgroundColor: "gray",
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "black", fontSize: 15 }} />
          </IconButton>
        </Box>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {Message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              EnableStatus(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              followIt();
              handleClose();
            }}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
export default CustomDialog;
