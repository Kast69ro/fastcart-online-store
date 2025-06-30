import { configureStore } from "@reduxjs/toolkit";
import homeSlice from '../../entities/slices/home/home-slice'
import cartSlice from '../../entities/slices/cart/cart-slice'
import regisyrateSlice from '../../entities/slices/registrate/registrate'
import logInSlice from '../../entities/slices/log-in/log-in'
import getUserById from '../../entities/slices/account/account-slice'
import  productsSlice  from "../../entities/slices/products/products";
import wishlistSlice from '../../entities/slices/wish/wishSlice'


export const Store = configureStore({
    reducer:{
        home:homeSlice,
        registrate:regisyrateSlice,
        cart:cartSlice,
        login:logInSlice,
        account:getUserById,
        products:productsSlice,
        wishlist:wishlistSlice

    }
})