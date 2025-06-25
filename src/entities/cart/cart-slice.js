import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(
    "http://37.27.29.18:8002/Cart/get-products-from-cart",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return data.data[0];
});

export const addToCart = createAsyncThunk("cart/addToCart", async (id) => {
   const token = localStorage.getItem("token");
  await axios.post(
    `http://37.27.29.18:8002/Cart/add-product-to-cart?id=${id}`,{},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
});

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
