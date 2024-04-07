import { FunctionComponent, ReactNode } from 'react'
import { IoIosSync } from 'react-icons/io'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  className?: string
  loading?: boolean
  loadingText?: string
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
  className,
  loading,
  ...rest
}): ReactNode => {
  return (
    <div className="relative">
      {loading && (
        <IoIosSync className="absolute left-2 top-2 animate-spin text-2xl text-white" />
      )}

      <button
        type={type || 'submit'}
        onClick={onClick}
        disabled={disabled || loading}
        className={
          !loading && !disabled
            ? `bg-sky-600 text-white w-full py-2 rounded-md shadow-lg hover:bg-sky-700 transition duration-300 active:shadow-none active:bg-sky-600 motion-reduce:transition-none ${className}`
            : 'bg-sky-200 text-white w-full py-2 rounded-md shadow-lg'
        }
        {...rest}
      >
        <div className="flex items-center justify-center w-auto">
          {children}
        </div>
      </button>
    </div>
  )
}
