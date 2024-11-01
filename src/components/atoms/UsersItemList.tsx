import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchUsersAction } from '../../features/users/action'
import { Bounce, ToastContainer } from 'react-toastify'
import { UserItem } from './UserItem'
import { UserForm } from '../molecules/UserForm'

export const UserItemList = () => {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  if (loading) console.log('loading')
  if (error) console.log(error)

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <UserForm />
      <ul>
        {data.length > 0 &&
          data.map(user => <UserItem key={user.id} user={user} />)}
      </ul>
    </>
  )
}
