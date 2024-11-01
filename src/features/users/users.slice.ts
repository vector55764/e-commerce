import { createSlice } from '@reduxjs/toolkit'
import {
  addUserAction,
  deleteUserAction,
  fetchUsersAction,
  updateUserAction,
} from './action'
import { toast } from 'react-toastify'

export type UserId = string

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
}

type UserState = {
  data: User[]
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsersAction.pending, state => {
        state.loading = true
      })
      .addCase(fetchUsersAction.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUsersAction.rejected, (state, action) => {
        toast.dismiss()
        toast.error('failed load users')
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(addUserAction.pending, state => {
        state.loading = true
      })
      .addCase(addUserAction.fulfilled, (state, action) => {
        toast.dismiss()
        toast.success('success add user')

        state.loading = false
        state.data.push(action.payload)
      })
      .addCase(addUserAction.rejected, (state, action) => {
        toast.dismiss()
        toast.error('failed add user')
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(updateUserAction.pending, state => {
        state.loading = true
      })
      .addCase(updateUserAction.fulfilled, (state, action) => {
        toast.dismiss()
        toast.success('success update user')

        state.loading = false
        state.data = state.data.map(user =>
          user.id === action.payload.id ? action.payload : user,
        )
      })
      .addCase(updateUserAction.rejected, (state, action) => {
        toast.dismiss()
        toast.error('failed update user')
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
      .addCase(deleteUserAction.pending, state => {
        state.loading = true
      })
      .addCase(deleteUserAction.fulfilled, (state, action) => {
        toast.dismiss()
        toast.success('success delete user')

        state.loading = false
        state.data = state.data.filter(user => user.id !== action.payload.id)
      })
      .addCase(deleteUserAction.rejected, (state, action) => {
        toast.dismiss()
        toast.error('failed delete user')
        state.loading = false
        state.error = action.error.message ?? 'UNKNOWN ERROR'
      })
  },
})
