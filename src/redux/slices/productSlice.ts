import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProductsAsync, getProductByIdAsync, createProductsAsync } from '../../api';
import { IProduct } from '../../types/types';

export type Products = {
  avatar: string;
  price: number;
  name: string;
  _id: string;
  description: string;
  category: string;
};

export interface ProductState {
  isLoading: boolean;
  error: string | undefined;
  products: Products[];
  product: IProduct;
  message: string | undefined;
}

const initialState: ProductState = {
  isLoading: false,
  error: undefined,
  products: [],
  product: {
    product: {
      price: undefined,
      _id: undefined,
      avatar: undefined,
      description: undefined,
      name: undefined,
    },
  },
  message: undefined,
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = {
        product: {
          price: undefined,
          _id: undefined,
          avatar: undefined,
          description: undefined,
          name: undefined,
        },
      };
    },
    filterProducts: (state, action) => {
      state.products = state.products.filter((product) => product.category === action.payload.name);
      console.log(state.products);
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
    builder.addCase(getProductByIdAsync.fulfilled, (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.product = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getProductByIdAsync.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(createProductsAsync.fulfilled, (state, action) => {
      state.products.unshift(action.payload.product);
    });
  },
});

export default productSlice.reducer;
export const { resetProduct, filterProducts } = productSlice.actions;
