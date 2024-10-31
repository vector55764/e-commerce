import { Product, ProductId } from '../../src/features/products/products.slice'
import { User, UserId } from '../../src/features/users/users.slice'
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

export const getUsers = () => {
  return apiClient.get('/users')
}
export const addUser = (data: User) => {
  return apiClient.post('/users', data)
}
export const updateUser = (data: User) => {
  return apiClient.put(`/users/${data.id}`, data)
}
export const deleteUser = (id: UserId) => {
  return apiClient.delete(`/products/${id}`)
}
