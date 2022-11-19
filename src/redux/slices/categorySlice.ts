import { createSlice } from '@reduxjs/toolkit';

import { getCategoriesAsync } from '../../api';

export type Categories = {
  name: string;
  _id: string;
};

interface CategoryState {
  isLoading: boolean;
  error: string | undefined;
  categories: Categories[];
}

const initialState: CategoryState = {
  isLoading: false,
  error: undefined,
  categories: [],
};

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategoriesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.categories;
      console.log(action.payload);
    });
    builder.addCase(getCategoriesAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
