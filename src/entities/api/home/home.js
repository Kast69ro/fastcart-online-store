import {  createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../../config/axios/axios";

export const getCategory = createAsyncThunk("home/getCategory", async () => {
  try {
    const response = await defaultAxios.get("/Category/get-categories");

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});
export const getProduct = createAsyncThunk("home/getProduct", async () => {
  try {
    const response = await defaultAxios.get("/Product/get-products");
    return response.data.data.products;
  } catch (error) {
    console.log(error);
  }
});