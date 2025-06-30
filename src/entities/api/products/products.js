import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest, defaultAxios } from "../../../config/axios/axios";

export const getBrand = createAsyncThunk("products/getBrand", async () => {
  try {
    let data = await axiosRequest.get("/Brand/get-brands");
    return data.data.data
  } catch (error) {
    console.log(error);
  }
});

export const getProductById = createAsyncThunk("products/ getProductById", async (id) => {
    try {
        const response = await defaultAxios.get(`/Product/get-product-by-id?id=${id}`)
        return response.data.data
    } catch (error) {
        console.log(error);

    }
})
