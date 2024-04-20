import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/Auth";

const store=configureStore({
    reducer:{
        authSlice
    }
})
export default store