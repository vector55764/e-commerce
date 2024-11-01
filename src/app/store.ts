import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../features/products/products.slice'
import { usersSlice } from '../features/users/users.slice'

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch
