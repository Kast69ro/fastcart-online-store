import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../api/cart/cart";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dataCart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.dataCart = action.payload;
    });
  },
});

export default cartSlice.reducer;
