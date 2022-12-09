import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  // snackbarStatus: {
  //   status: false,
  //   severity: "",
  //   message: "",
  // },
  snackbarStatus: {},
  userId: "",
  deleteuser: null,
  movie: "",
};

export const commonSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    snackBar: (state, action) => {
      state.snackbarStatus = action.payload;
    },
    setLoader: (state, action) => {
      state.status = action.payload;
    },
    getUserId: (state, action) => {
      state.userId = action.payload;
    },
    //for page refreshing
    isDeleted: (state, action) => {
      state.deleteuser = action.payload;
    },
    findMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { snackBar, setLoader, getUserId, isDeleted, findMovie } =
  commonSlice.actions;

export default commonSlice.reducer;
