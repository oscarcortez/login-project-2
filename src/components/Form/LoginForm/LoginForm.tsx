import { FunctionComponent, ReactElement, ReactNode } from 'react'

import { RiMailLine } from 'react-icons/ri'

import { InputText } from '../InputText'
import { Password } from '../Password'
import { Button } from '../Button'

// import styles from './LoginForm.module.css'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { CustomNotLoggedForm } from '../CustomNotLoggedForm'

type LoginFormProps<T extends FieldValues> = {
  title: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  errors: FieldErrors<T>
  register: unknown
  isLoading: boolean
  bottomLeftLink?: ReactElement
  bottomRightLink?: ReactElement
}

export const LoginForm: FunctionComponent<LoginFormProps<FieldValues>> = ({
  title,
  onSubmit,
  errors,
  register,
  isLoading,
  bottomLeftLink,
  bottomRightLink
}): ReactNode => {
  return (
    <>
      <CustomNotLoggedForm
        title={title}
        onSubmit={onSubmit}
        bottomLeftLink={bottomLeftLink}
        bottomRightLink={bottomRightLink}
      >
        <InputText
          name="email"
          type="text"
          placeholder="Email"
          icon={RiMailLine}
          register={register as UseFormRegister<FieldValues>}
          error={errors['email']?.message as string}
        />
        <Password
          name="password"
          placeholder="Password"
          toggleMask
          register={register as UseFormRegister<FieldValues>}
          error={errors['password']?.message as string}
        />
        <Button
          type="submit"
          className="bg-sky-600 text-white hover:bg-sky-700"
          loading={isLoading}
        >
          Log In
        </Button>
      </CustomNotLoggedForm>
    </>
  )
}
