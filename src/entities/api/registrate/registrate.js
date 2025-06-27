import { createAsyncThunk } from "@reduxjs/toolkit";

import { defaultAxios } from "../../../config/axios/axios";

export const postUser = createAsyncThunk(
  "registrate/postUser",
  async (user) => {
    try {
      const res = await defaultAxios.post("/Account/register", user);
      return res.status;
    } catch (error) {
      console.log(error);
    }
  }
);