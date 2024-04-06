import { FunctionComponent, ReactNode, useState } from 'react'
import styles from './Login.module.css'
import {
  RiMailLine,
  RiLockPasswordLine,
  RiEyeLine,
  RiEyeOffLine
} from 'react-icons/ri'
// type Props = {}

export const Login: FunctionComponent = (): ReactNode => {
  //props: Props
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className={styles.form}>
        <div className="mb-10">
          <h1 className={styles.title}>Log In</h1>
        </div>
        <form className="flex flex-col gap-4" action="">
          <div className="relative">
            <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 outline-none py-2 pl-7 pr-2 rounded-lg transition-all duration-300 focus:border-gray-500 hover:border-gray-500"
            />
          </div>
          <div className="relative">
            <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border border-gray-200 outline-none py-2 px-7 rounded-lg transition-all duration-300 focus:border-gray-500 hover:border-gray-500"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={togglePassword}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            ) : (
              <RiEyeLine
                onClick={togglePassword}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-sky-600 text-white w-full py-2 rounded-lg hover:bg-sky-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </>
  )
}
