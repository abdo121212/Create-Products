import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/Products";
import cartReducer from "./Features/CartSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});

export default store;
