import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { axiosRequest } from "../../../config/axios/axios";

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const { data } = await axiosRequest.get("/Cart/get-products-from-cart");
  return data.data[0];
});

export const addToCart = createAsyncThunk("cart/addToCart", async (id,{dispatch}) => {
  try {
    await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`);
    dispatch(getCart())
  } catch (error) {
    toast.error("This product is already in the cart");
  }
});

export const deleteCartProduct = createAsyncThunk(
  "cart/deleteCartProduct",
  async (id, { dispatch }) => {
    await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${id}`);
    dispatch(getCart());
  }
);

export const resetCart = createAsyncThunk(
  "cart/resetCart",
  async (_, { dispatch }) => {
    try {
      await axiosRequest.delete("/Cart/clear-cart");
      dispatch(getCart());
      toast.success("cart empty");
    } catch (error) {
      toast.error("error");
    }
  }
);

export const incrementProductInCart = createAsyncThunk(
  "cart/incrementProductInCart",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`);
      dispatch(getCart());
    } catch (error) {
      toast.error("The number of items in the cart cannot be zero, if you want to remove an item from the cart, use another button");
    }
  }
);

export const decrementProductInCart = createAsyncThunk(
  "cart/decrementProductInCart",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`);
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }
);