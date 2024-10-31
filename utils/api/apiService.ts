import { Product, ProductId } from '../../src/features/products/products.slice'
import apiClient from './apiClient'

export const getProducts = () => {
  return apiClient.get('/products')
}
export const addProduct = (data: Product) => {
  return apiClient.post('/products', data)
}
export const updateProduct = (data: Product) => {
  return apiClient.put(`/products/${data.id}`, data)
}
export const deleteProduct = (id: ProductId) => {
  return apiClient.delete(`/products/${id}`)
}
