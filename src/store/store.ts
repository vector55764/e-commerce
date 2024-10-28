import { configureStore, createSelector } from '@reduxjs/toolkit'
import { productsSlice } from './products.slice'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsSlice.reducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispach>()
export const useAppStore = useStore.withTypes<typeof store>()
export const createAppSelector = createSelector.withTypes<AppState>()
