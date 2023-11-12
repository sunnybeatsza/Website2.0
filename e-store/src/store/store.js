// store.js
import { configureStore } from "@reduxjs/toolkit";
import LoginStaus from "../Components/Login/LoginSlice";
import cartReducer from "../Components/Cart/CartSlice";

const store = configureStore({
  reducer: {
    login: LoginStaus,
    cart: cartReducer,
  },
});

export default store;
