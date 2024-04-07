import { FunctionComponent, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { useState } from 'react'
import { RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { useForm } from 'react-hook-form'

type InputTextProps = {
  icon?: IconType
  name: string
  register: ReturnType<typeof useForm>['register']
  // value: string
  // id: string
  placeholder?: string
  // disabled?: boolean
  toggleMask: boolean
}

export const Password: FunctionComponent<InputTextProps> = ({
  icon: Icon,
  name,
  register,
  // value,
  // id,
  // placeholder,
  // disabled,
  toggleMask,
  ...props
}): ReactNode => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className="relative">
        {Icon ? (
          <Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        ) : (
          <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        )}

        <input
          type={showPassword ? 'text' : 'password'}
          // placeholder={placeholder}
          // disabled={disabled}
          // value={value}
          // id={id}
          // name={id}
          // onChange={onChange}
          autoComplete={showPassword ? 'current-password' : 'off'}
          className="w-full border border-gray-300 outline-none py-2 px-7 rounded-lg transition-all duration-300 hover:border-sky-500  focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(186,230,253,1)]"
          {...register(name)}
          {...props}
        />

        {toggleMask &&
          (showPassword ? (
            <RiEyeOffLine
              onClick={togglePassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={togglePassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          ))}
      </div>
    </>
  )
}
