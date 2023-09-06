import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { getProducts } from "./thunks";

export interface ProductState {
  page: number;
  products: IProduct[];
  isLoading?: boolean;
}

const initialState: ProductState = {
  page: 0,
  products: [],
  isLoading: false,
};

export const fakestoreSlice = createSlice({
  name: "storeproduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
        state.page = action.payload.page;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
