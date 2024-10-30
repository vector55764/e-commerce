import { createSlice } from '@reduxjs/toolkit'
import {
  addNewProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from './createActions'

export type ProductId = string

type size = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

export type Product = {
  id: ProductId
  name: string
  imageUrls: string[]
  rank: number
  countReviews: number
  inStock: boolean
  price: number
  description: string
  colours: string[]
  sizes: size[]
  discount: number
  category: string
}

type ProductsState = {
  data: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  //   selectors: {},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(addNewProduct.pending, state => {
        state.loading = true
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.data.push(action.payload)
        state.loading = false
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(deleteProduct.pending, state => {
        state.loading = true
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false
        state.data = state.data.filter(
          product => product.id !== action.payload.id,
        )
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(updateProduct.pending, state => {
        state.loading = true
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false
        state.data = state.data.map(product =>
          product.id === action.payload.id ? action.payload : product,
        )
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
  },
})
