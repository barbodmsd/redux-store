import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/Auth";
import cartSlice from "./Slices/Cart";

const store = configureStore({
  reducer: {
    authSlice,
    cartSlice,
  },
});
export default store;
