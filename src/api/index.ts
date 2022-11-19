import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhdHVoYW55b2xjdXVAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2JhY2F5byIsImlhdCI6MTY2ODY4NTM5NCwiZXhwIjoxNjY5MTE3Mzk0fQ.GfXhBpDn4rbAFUaYycLA_BvQQXkDALZrBGEUazMB4mU';
const baseURL = 'https://upayments-studycase-api.herokuapp.com/api/';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getProductsAsync = createAsyncThunk('productSlice/getProductsAsync', async () => {
  const response = await axios.get('products');
  return response.data;
});
export const getProductByIdAsync = createAsyncThunk(
  'productSlice/getProductByIdAsync',
  async (id: string) => {
    const response = await axios.get(`products/${id}`);
    return response.data;
  }
);
export const createProductsAsync = createAsyncThunk(
  'productSlice/createProductsAsync',
  async () => {
    const response = await axios.post('products');
    return response.data;
  }
);

export const getCategoriesAsync = createAsyncThunk('categorySlice/getCategoriesAsync', async () => {
  const response = await axios.get('categories');
  return response.data;
});

export const getCategoriesByIdAsync = createAsyncThunk(
  'categorySlice/getCategoriesByIdAsync',
  async (id) => {
    const response = await axios.get(`categories/${id}`);
    console.log(response.data);
    return response.data;
  }
);
