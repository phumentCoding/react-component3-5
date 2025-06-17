import { configureStore } from '@reduxjs/toolkit';
import homeStore from './homeStore';


export const store = configureStore({
  reducer: {
    homeStore :  homeStore.reducer
  },
});