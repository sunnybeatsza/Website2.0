import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "LoginStaus",
  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login } = LoginSlice.actions;
export default LoginSlice.reducer;
