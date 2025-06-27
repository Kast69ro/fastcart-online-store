import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../../api/account/account";


export const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.fulfilled,(state,action)=>{
        state.user = action.payload
    })
  },
});

export default accountSlice.reducer;
