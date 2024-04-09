import { FunctionComponent, ReactNode, useState } from 'react'
import { RiMailLine } from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { InputText } from '../../components/Form/InputText'
import { Password } from '../../components/Form/Password'
import { Button } from '../../components/Form/Button'
import { loginSchema } from '../../validations/loginSchema'

import styles from './Login.module.css'

// type LoginFormData = {
//   email: string
//   password: string
// }

export const Login: FunctionComponent = (): ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(loginSchema) })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log(data)
    }, 2000)
  })
  // console.log(errors)
  return (
    <>
      <div className={styles.form}>
        <div className="mb-10">
          <h1 className={styles.title}>Log In</h1>
        </div>
        <form className="flex flex-col gap-3" action="" onSubmit={onSubmit}>
          <InputText
            name="email"
            type="text"
            placeholder="Email"
            icon={RiMailLine}
            register={register}
            error={errors.email?.message as string}
          />
          <Password
            name="password"
            placeholder="Password"
            toggleMask
            register={register}
            error={errors.password?.message as string}
          />
          <Button loading={isLoading}>Log In</Button>
        </form>
      </div>
    </>
  )
}
