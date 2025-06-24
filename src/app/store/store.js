import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "../../entities/for-about/home/home-slice";


export const Store = configureStore({
    reducer:{
        home:homeSlice
    }
})