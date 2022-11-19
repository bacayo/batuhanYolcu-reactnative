import { createSlice } from '@reduxjs/toolkit';

import { getProductsAsync, getProductByIdAsync } from '../../api';

export type Products = {
  avatar: string;
  price: number;
  name: string;
  _id: string;
  description: string;
};

export interface ProductState {
  isLoading: boolean;
  error: string | undefined;
  products: Products[];
  product: Products[];
  message: string | undefined;
}

const initialState: ProductState = {
  isLoading: false,
  error: undefined,
  products: [],
  product: [],
  message: undefined,
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getProductsAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.message = action.payload.message;
    });
    builder.addCase(getProductsAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getProductByIdAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByIdAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload.product;
      console.log(action.payload);
    });
    builder.addCase(getProductByIdAsync.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
export const { resetProduct } = productSlice.actions;
