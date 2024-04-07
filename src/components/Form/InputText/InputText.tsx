import { FunctionComponent, ReactNode, ChangeEvent } from 'react'
import { IconType } from 'react-icons'

type InputTextProps = {
  icon?: IconType
  type: 'text' | 'email'
  label: string
  value: string
  id?: string
  placeholder: string
  disabled?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputText: FunctionComponent<InputTextProps> = ({
  icon: Icon,
  type,
  value,
  id,
  placeholder,
  disabled,
  onChange
}): ReactNode => {
  return (
    <>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border border-gray-300 outline-none py-2 pl-7 pr-2 rounded-lg transition-all duration-300 hover:border-sky-500  focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(186,230,253,1)]"
          id={id || type}
          name={id || type}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </>
  )
}
