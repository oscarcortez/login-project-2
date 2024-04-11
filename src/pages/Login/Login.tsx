import { FunctionComponent, ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form' //UseFormRegister
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { loginSchema } from '../../validations/loginSchema'

import { LoginForm } from '../../components/Form/LoginForm'

type FormValues = {
  email: string
  password: string
}

export const Login: FunctionComponent = (): ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log(data)
    }, 1000)
  })

  const bottomLeftLink = (
    <Link to="/forgot-password" className="text-gray-500 hover:underline">
      Forgot Password?
    </Link>
  )

  const bottomRightLink = (
    <Link to="/register" className="text-sky-600 hover:underline ml-4">
      Create an account
    </Link>
  )

  return (
    <LoginForm
      title="Log In"
      onSubmit={onSubmit}
      errors={errors}
      register={register}
      isLoading={isLoading}
      bottomLeftLink={bottomLeftLink}
      bottomRightLink={bottomRightLink}
    />
  )
}
