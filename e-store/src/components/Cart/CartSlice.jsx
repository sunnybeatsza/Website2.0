// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    shippingMethod: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setShippingMethod } =
  cartSlice.actions;
export default cartSlice.reducer;
