import { createSlice } from "@reduxjs/toolkit";
import { getBrand, getProductById } from "../../api/products/products";





 const productsSlice = createSlice({
    name:'products',
    initialState:{
        brandData:[], 
        byIdProduct:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getBrand.fulfilled,(state,action)=>{
            state.brandData = action.payload
        });
        builder.addCase(getProductById.fulfilled,(state,action)=>{
            state.byIdProduct=action.payload

        })
    }
})

export default productsSlice.reducer