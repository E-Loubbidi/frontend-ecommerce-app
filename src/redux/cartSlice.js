import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
  },
  reducers: {
    addProduct: (state) => {
      state.quantity += 1;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
