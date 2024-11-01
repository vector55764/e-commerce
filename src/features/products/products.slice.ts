import { createSlice } from '@reduxjs/toolkit'
import {
  addProductAction,
  deleteProductAction,
  fetchProductsAction,
  updateProductAction,
} from './actions'
import { toast } from 'react-toastify'

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
      .addCase(fetchProductsAction.pending, state => {
        state.loading = true
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProductsAction.rejected, (state, action) => {
        toast.dismiss()
        toast.error('failed load products')
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(addProductAction.pending, state => {
        state.loading = true
      })
      .addCase(addProductAction.fulfilled, (state, action) => {
        toast.dismiss()
        toast.success('success add product')

        state.data.push(action.payload)
        state.loading = false
      })
      .addCase(addProductAction.rejected, (state, action) => {
        toast.dismiss()
        toast.error('failed add product')

        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(deleteProductAction.pending, state => {
        state.loading = true
      })
      .addCase(deleteProductAction.fulfilled, (state, action) => {
        toast.dismiss()
        toast.success('success delete product')

        state.loading = false
        state.data = state.data.filter(
          product => product.id !== action.payload.id,
        )
      })
      .addCase(deleteProductAction.rejected, (state, action) => {
        toast.dismiss()
        toast.success('failed delete product')

        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(updateProductAction.pending, state => {
        state.loading = true
      })
      .addCase(updateProductAction.fulfilled, (state, action) => {
        toast.dismiss()
        toast.success('success update product')

        state.loading = false
        state.data = state.data.map(product =>
          product.id === action.payload.id ? action.payload : product,
        )
      })
      .addCase(updateProductAction.rejected, (state, action) => {
        toast.dismiss()
        toast.success('failed update product')

        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
  },
})
