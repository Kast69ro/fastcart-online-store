import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../config/axios/axios";

export const getUserById = createAsyncThunk(
  "account/getUserById",
  async (id) => {
    const data = await axiosRequest.get(
      `/UserProfile/get-user-profile-by-id?id=${id}`);
    return data.data.data
  }
);