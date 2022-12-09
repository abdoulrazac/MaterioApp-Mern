import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export const miniGrids = (props) => {
  const { icon, message, value, submsg } = props;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Box>{icon}</Box>
            <Typography variant="body2">{message}</Typography>
            <Typography variant="h6">{value}</Typography>
            <Typography variant="body2">{submsg}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>{icon}</Box>
            <Typography variant="body2">{message}</Typography>
            <Typography variant="h6">{value}</Typography>
            <Typography variant="body2">{submsg}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>{icon}</Box>
            <Typography variant="body2">{message}</Typography>
            <Typography variant="h6">{value}</Typography>
            <Typography variant="body2">{submsg}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Box>{icon}</Box>
            <Typography variant="body2">{message}</Typography>
            <Typography variant="h6">{value}</Typography>
            <Typography variant="body2">{submsg}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
