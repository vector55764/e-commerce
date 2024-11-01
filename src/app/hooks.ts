import { useDispatch, useSelector, useStore } from 'react-redux'
import { AppDispach, AppState, store } from './store'

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispach>()
export const useAppStore = useStore.withTypes<typeof store>()
