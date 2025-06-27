import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "../../api/registrate/registrate";



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
