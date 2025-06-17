import { configureStore } from '@reduxjs/toolkit';
import homeStore from './homeStore';
import cartStore from './cartStore';


export const store = configureStore({
  reducer: {
    homeStore :  homeStore.reducer,
    cartStore :  cartStore.reducer
  },
});