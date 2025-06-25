import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../config/utilits";

export const logIn = createAsyncThunk(
  "login/logIn",
  async ({ userName, password }) => {
    try {
      let data = await axios.post(`http://37.27.29.18:8002/Account/login`, {
        userName,
        password,
      });
      localStorage.setItem("token", data.data.data);
      return data.status;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
);

export const logInSlice = createSlice({
  name: "login",
  initialState: {
    statusCode: null,
    error: false,
  },
  reducers: {
    resetStatus(state) {
      state.statusCode = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.statusCode = action.payload;
    });
  },
});

export const { resetStatus } = logInSlice.actions;
export default logInSlice.reducer;
