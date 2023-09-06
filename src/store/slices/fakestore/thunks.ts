import { createAsyncThunk } from "@reduxjs/toolkit";
import { fakeStoreApi } from "../../../api/fakeStore/fakeStoreApi";
import { IProduct } from "../../../interfaces";

export const getProducts = createAsyncThunk(
  "products/paginate",
  async (page: number) => {
    const { data } = await fakeStoreApi.get<IProduct[]>(
      `products?offset=${page * 10}&limit=10`
    );

    return { products: data, page };
  }
);
