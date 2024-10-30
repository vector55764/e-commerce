import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../features/products/products.slice'

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch
