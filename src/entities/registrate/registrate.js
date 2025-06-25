import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUser = createAsyncThunk(
  "registrate/postUser",
  async (user) => {
    try {
      const res = await axios.post(
        "http://37.27.29.18:8002/Account/register",
        user
      );
      return res.status;
    } catch (error) {
      console.log(error);
    }
  }
);

export const registrateSlice = createSlice({
  name: "registrate",
  initialState: {
    statusCode: null,
  },
  reducers: {
    resetStatus(state) {
      state.statusCode = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.statusCode = action.payload; 
    });
  },
});

export const { resetStatus } = registrateSlice.actions;
export default registrateSlice.reducer;
