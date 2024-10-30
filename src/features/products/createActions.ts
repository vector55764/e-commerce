import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product, ProductId } from './products.slice'

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await axios.get('http://localhost:3000/products')
  return response.data
})

export const addNewProduct = createAsyncThunk(
  'addPoduct',
  async (initialProduct: Product) => {
    const response = await axios.post('http://localhost:3000/products', {
      ...initialProduct,
      id: nanoid(),
    })
    return response.data
  },
)

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (productId: ProductId) => {
    const response = await axios.delete(
      `http://localhost:3000/products/${productId}`,
    )
    return response.data
  },
)

export const updateProduct = createAsyncThunk(
  'updateProduct',
  async (initialProduct: Product) => {
    const response = await axios.put(
      `http://localhost:3000/products/${initialProduct.id}`,
      initialProduct,
    )
    return response.data
  },
)
