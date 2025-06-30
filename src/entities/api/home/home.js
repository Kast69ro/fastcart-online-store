import {  createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest, defaultAxios } from "../../../config/axios/axios";

export const getCategory = createAsyncThunk("home/getCategory", async () => {
  try {
    const response = await defaultAxios.get("/Category/get-categories");

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});



export const getProduct = createAsyncThunk("home/getProduct", async (e = {}) => {
    const query = new URLSearchParams();

    if (e.MinPrice != undefined) query.append("MinPrice", e.MinPrice);
    if (e.MaxPrice != undefined) query.append("MaxPrice", e.MaxPrice);
    if (e.BrandId != undefined) query.append("BrandId", e.BrandId);
    if (e.CategoryId != undefined) query.append("CategoryId", e.CategoryId);
    if (e.ProductName) query.append("ProductName", e.ProductName);

    const response = await axiosRequest.get(
        `/Product/get-products?${query.toString()}`
    );
    return response.data.data.products;
}
);

