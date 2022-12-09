import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

// const sales = [
//   {
//     title: "8656K",
//     subtitle: "usa",
//     footer: "894k",
//     subFooter: "sales",
//   },
//   {
//     title: "8656K",
//     subtitle: "usa",
//     footer: "894k",
//     subFooter: "sales",
//   },
//   { title: "8656K", subtitle: "usa", footer: "894k", subFooter: "sales" },
//   {
//     title: "8656K",
//     subtitle: "usa",
//     footer: "894k",
//     subFooter: "sales",
//   },
//   {
//     title: "8656K",
//     subtitle: "usa",
//     footer: "894k",
//     subFooter: "sales",
//   },
// ];
export const CommmonGrid = (props) => {
  const {
    header,
    message,
    submsg,
    footer,
    subfooter,
    img,
    img2,
    img3,
    img4,
    message2,
    submsg2,
    footer2,
    subfooter2,
    message3,
    submsg3,
    footer3,
    subfooter3,
    message4,
    submsg4,
    footer4,
    subfooter4,
  } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sx={{
            padding: "10px",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            borderRadius: "10px",
            mt: 2,
          }}
        >
          {/* .map((text, index) => (
            
          ))} */}
          <Typography variant="body2" fontWeight="bold">
            {header}
          </Typography>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <img src={img} style={{ height: "30px", width: "30px" }} />
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {message}
                </Typography>
                <Typography variant="body2" fontSize="10px">
                  {submsg}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight="bold">
                {footer}
              </Typography>
              <Typography variant="body1" fontSize="10px">
                {subfooter}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <img src={img2} style={{ height: "30px", width: "30px" }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {message2}
                </Typography>
                <Typography variant="body2" fontSize="10px">
                  {submsg2}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight="bold">
                {footer2}
              </Typography>
              <Typography variant="body1" fontSize="10px">
                {subfooter2}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <img src={img3} style={{ height: "30px", width: "30px" }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {message3}
                </Typography>
                <Typography variant="body2" fontSize="10px">
                  {submsg3}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight="bold">
                {footer3}
              </Typography>
              <Typography variant="body1" fontSize="10px">
                {subfooter3}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <img src={img4} style={{ height: "30px", width: "30px" }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {message4}
                </Typography>
                <Typography variant="body2" fontSize="10px">
                  {submsg4}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body1" fontWeight="bold">
                {footer4}
              </Typography>
              <Typography variant="body1" fontSize="10px">
                {subfooter4}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
