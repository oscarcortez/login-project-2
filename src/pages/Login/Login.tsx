import { FunctionComponent, ReactNode } from 'react'
import { RiMailLine } from 'react-icons/ri'
import { useForm } from 'react-hook-form'

import { InputText } from '../../components/Form/InputText'
import { Password } from '../../components/Form/Password'
import { Button } from '../../components/Form/Button'

import styles from './Login.module.css'

export const Login: FunctionComponent = (): ReactNode => {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <div className={styles.form}>
        <div className="mb-10">
          <h1 className={styles.title}>Log In</h1>
        </div>
        <form className="flex flex-col gap-4" action="" onSubmit={onSubmit}>
          <InputText
            type="email"
            placeholder="Email"
            icon={RiMailLine}
            label="Email"
            // value=""
            id="email"
            disabled={false}
            register={register}
            // onChange={() => {}}
            {...register('email')}
          />
          <Password
            // value=""
            // id="password"
            // value=""
            // name="password"
            placeholder="Password"
            disabled={false}
            // onChange={() => {}}
            toggleMask
            register={register}
            {...register('password')}
          />
          <Button>Log In</Button>
        </form>
      </div>
    </>
  )
}
