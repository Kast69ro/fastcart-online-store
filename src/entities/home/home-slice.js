import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk("home/getCategory", async () => {
  try {
    const response = await axios.get(
      "http://37.27.29.18:8002/Category/get-categories"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});
export const getProduct = createAsyncThunk("home/getProduct", async () => {
  try {
    const response = await axios.get(
      'http://37.27.29.18:8002/Product/get-products'
    );
    return response.data.data.products;
  } catch (error) {
    console.log(error);
  }
});



export const homeSlice = createSlice({
  name: "home",
  initialState: {
    dataCategory: [],
    dataProduct:[]
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
