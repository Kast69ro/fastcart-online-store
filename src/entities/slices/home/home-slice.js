import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getProduct } from "../../api/home/home";


export const homeSlice = createSlice({
  name: "home",
  initialState: {
    dataCategory: [],
    dataProduct: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.dataCategory = action.payload;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.dataProduct = action.payload;
    });
  },
});

export default homeSlice.reducer;
