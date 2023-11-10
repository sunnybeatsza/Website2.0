// store.js
import { configureStore } from "@reduxjs/toolkit";
import LoginStaus from "../Components/Login/LoginSlice";

const store = configureStore({
  reducer: {
    login: LoginStaus,
  },
});

export default store;
