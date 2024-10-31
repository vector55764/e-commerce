import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import { Product, ProductId } from './products.slice'
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../../../utils/api/apiService'

export const fetchProductsAction = createAsyncThunk(
  'fetchProducts',
  async () => {
    try {
      const { data } = await getProducts()
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
)

export const addProductAction = createAsyncThunk(
  'addPoduct',
  async (initialProduct: Product) => {
    try {
      const { data } = await addProduct({
        ...initialProduct,
        id: nanoid(),
      })
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
)

export const deleteProductAction = createAsyncThunk(
  'deleteProduct',
  async (productId: ProductId) => {
    try {
      const { data } = await deleteProduct(productId)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
)

export const updateProductAction = createAsyncThunk(
  'updateProduct',
  async (initialProduct: Product) => {
    try {
      const { data } = await updateProduct(initialProduct)
      return data
    } catch (erorr) {
      return Promise.reject(erorr)
    }
  },
)
