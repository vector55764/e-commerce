import { useAppDispatch } from '../../app/hooks'
import { deleteUserAction } from '../../features/users/action'
import { User, UserId } from '../../features/users/users.slice'

export const UserItem = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch()
  const handleDeleteUser = (id: UserId) => {
    dispatch(deleteUserAction(id))
  }
  return (
    <>
      <li>
        <div>
          <p>{user.id}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
          <p>{user.address}</p>
        </div>
        <div>
          <button>update</button>
          <button onClick={() => handleDeleteUser(user.id)}>delete</button>
        </div>
      </li>
    </>
  )
}
