import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slices/products";
import { cartReducer } from "../slices/cartSlice";
import AuthSlice from "../slices/auth";
import { admimSlice } from "../slices/dashboard";

export const store = configureStore({
  reducer: {
    fetchProduct: ProductReducer,
    cartReducer,
    auth: AuthSlice,
    dashBoard:admimSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
