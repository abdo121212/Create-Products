import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // add to cart
    addToCart: (state, action) => {
      const existedProduct = state.find(
        (product) => product.productId === action.payload.id
      );

      if (existedProduct) {
        alert("Product already added to cart ");
      } else {
        state.push({
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id,
          ...action.payload,
        });
      }
    },

    // increase quantity

    increaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);

      if (product) {
        product.quantity++;
      }
    },
    // decrease quantity

    decreaseQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    // remove from cart

    removeItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

console.log(cartSlice.actions.payload);

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
