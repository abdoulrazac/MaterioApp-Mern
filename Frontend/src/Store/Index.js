import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./Slice/commonSlice";
export const store = configureStore({
  reducer: {
    loader: commonSlice,
  },
});
