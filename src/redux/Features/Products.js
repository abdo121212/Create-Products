import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "product1",
    price: 50,
    category: "Clothes",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71bQeLHQF-L._AC_UL375_SR375,375_.jpg",
    date: "2020-10-10",
  },
  {
    id: 2,
    name: "product2",
    price: 30,
    category: "Clothes",
    image: "https://images-eu.ssl-images-amazon.com/images/I/717sEAdy02L._AC_UL375_SR375,375_.jpg",
    date: "2020-10-10",
  },
  {
    id: 3,
    name: "product3",
    price: 40,
    category: "Clothes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl65-OuqdTlOooJHO2IDQEFTa7DIHpG8kM_7FCCN-6CdHiSslaXeIbGP0NTNB-FWqzMm8&usqp=CAU",
    date: "2020-10-10",
  },
];
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
