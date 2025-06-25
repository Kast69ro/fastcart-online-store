import { configureStore } from "@reduxjs/toolkit";
import  homeSlice  from "../../entities/home/home-slice";
import  regisyrateSlice  from "../../entities/registrate/registrate";
import cartSlice from "../../entities/cart/cart-slice";
import   logInSlice  from "../../entities/log-in/log-in";


export const Store = configureStore({
    reducer:{
        home:homeSlice,
        registrate:regisyrateSlice,
        cart:cartSlice,
        login:logInSlice
    }
})