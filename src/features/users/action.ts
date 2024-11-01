import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from '../../../utils/api/apiService'
import { User, UserId } from './users.slice'

export const fetchUsersAction = createAsyncThunk('fetchUsers', async () => {
  try {
    const { data } = await getUsers()
    return data
  } catch (error) {
    return Promise.reject(error)
  }
})

export const addUserAction = createAsyncThunk(
  'addUser',
  async (initialUser: User) => {
    try {
      const { data } = await addUser({
        ...initialUser,
        id: nanoid(),
      })
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
)

export const updateUserAction = createAsyncThunk(
  'updateUser',
  async (initialUser: User) => {
    try {
      const { data } = await updateUser(initialUser)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
)

export const deleteUserAction = createAsyncThunk(
  'deleteUser',
  async (UserId: UserId) => {
    try {
      const { data } = await deleteUser(UserId)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  },
)
