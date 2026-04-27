import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";
import { productreducer } from "./slices/productSlice";

export const store = configureStore({
  //main reducer for the store
  reducer: {
    counterSlice: counterReducer,
    productSlice: productreducer,
  },
});
