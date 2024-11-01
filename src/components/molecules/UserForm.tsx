import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useAppDispatch } from '../../app/hooks'
import { addUserAction } from '../../features/users/action'

interface IFormInput {
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First name too short')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(2, 'First name too short')
    .required('First name is required'),
  email: yup.string().email('Invild email').required('Email is required'),
  password: yup.string().required('Password is required'),
  address: yup.string().required('Password is required'),
})

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })

  const dispatch = useAppDispatch()

  const onSubmit = (data: IFormInput) => {
    if (data !== undefined) {
      const user = { ...data, id: '' }
      dispatch(addUserAction(user))
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name:</label>
          <input {...register('firstName')} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last name:</label>
          <input {...register('lastName')} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Address:</label>
          <input {...register('address')} />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div>
          <label></label>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}
