import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategory, fetchProduct } from "../services/homeService";

//action
export const getCategory = createAsyncThunk('home/fetchCategory', async () => {
    const data = fetchCategory();
    return data;
});

export const getProduct = createAsyncThunk('home/fetchProduct', async () => {
    const data = fetchProduct();
    return data;
});





const homeStore = createSlice({
    name : 'homeStore',
    initialState : {
        sliders : [], 
        categories : [],
        products : [],
    },

    reducers : {
    
    },

    extraReducers: (builder) => {
        builder
          .addCase(getCategory.fulfilled, (state, action) => {
            state.categories = action.payload;//getting data from response
          })
          .addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload;
          })
          
          
      }
})

export default homeStore;
