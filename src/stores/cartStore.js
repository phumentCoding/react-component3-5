import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCartService, getItemFromCartService } from "../services/cartService";

export const addToCart = createAsyncThunk('addToCart', async (data) => {
    const response = await addToCartService(data);
    return response;
});
  
export const getItemFromCart = createAsyncThunk('getItemFromCart', async () => {
    const response = await getItemFromCartService();
    return response;
});


const cartStore = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        status : ''
    },
    extraReducers : (builder) => {
        builder

        .addCase(addToCart.pending,(state) => {
            state.status = 'loading';
        })
        .addCase(addToCart.fulfilled,(state) => {
            state.status = 'success';
        })
        .addCase(getItemFromCart.fulfilled, (state, action) => {
            state.carts = action.payload;
        })
    }
})

export default cartStore;