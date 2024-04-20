import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clear: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id === action.payload) {
          e.quantity = e.quantity - 1;
          if (e.quantity === 0) {
            return false;
          }
          return e;
        }
        return true;
      });
    },
  },
});
