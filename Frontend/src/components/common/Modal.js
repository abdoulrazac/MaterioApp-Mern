import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Alert, Button, IconButton, Snackbar, Typography } from "@mui/material";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CustomSnackbar from "./Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { isDeleted, snackBar } from "../../Store/Slice/commonSlice";
import { deleteRequest } from "../../Services/AxiosService";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

const CustomModal = forwardRef((props, ref) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const userDelete = useSelector((state) => state.loader.deleteuser);
  const { heading, Message, onSuccess, userId, type } = props;
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMsg, setSnackmsg] = React.useState("");
  const [severity, setSeverity] = React.useState();
  // const childRef = useRef();
  // const SnackRef = useRef();
  useImperativeHandle(ref, () => ({
    handleClickOpen() {
      setOpen(true);
    },
  }));
  // const handleClose = () => {
  //   setOpen(false);
  //   setOpenSnack(true);
  //   setSnackmsg("success");
  //   setSeverity("error");
  // };
  // const openSnackBar = () => {
  //   SnackRef.current.handleClickOpenSnack();
  // };
  // const OkButton = () => {
  //  setSeverity("success");
  //   setOpenSnack(true);
  //   setOpen(false);
  // };

  const handleClose = () => {
    setOpen(false);
    dispatch(
      snackBar({
        status: true,
        severity: "error",
        message: "execution failed",
      })
    );
  };
  const OkButton = () => {
    type === "add"
      ? Navigate("/profile")
      : deleteRequest(`/profile/${userId}`)
          .then((res) => {
            console.log("reesss", res);
            setOpen(false);
            dispatch(isDeleted(true));
            dispatch(
              snackBar({
                // ...snakeMsg,
                message: res.message,
                status: true,
                severity: "success",
                // message: "Action successfully performed",
              })
            );
          })
          .catch((err) => {
            dispatch(isDeleted(false));
            dispatch(
              snackBar({
                // ...snakeMsg,
                status: true,
                severity: "success",
                message: "execution failed",
              })
            );
          });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3>{heading}</h3>
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{ color: "black", fontSize: 15, backgroundColor: "gray" }}
              />
            </IconButton>
          </Box>
          <Typography variant="body2">{Message}</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "5px",
            }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                OkButton();
              }}
            >
              Confirm
            </Button>
            <Button size="small" variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
          {/* <CustomSnackbar
            ref={SnackRef}
            snackMsg={snackMsg}
            severity={severity}
          /> */}
        </Box>
      </Modal>
    </div>
  );
});
export default CustomModal;
