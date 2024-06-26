import { FunctionComponent, ReactNode } from 'react'
import { IconType } from 'react-icons'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputTextProps = {
  icon?: IconType
  //register?: ReturnType<typeof useForm>['register']
  register?: UseFormRegister<FieldValues>
  type: 'text'
  id?: string
  placeholder: string
  disabled?: boolean
  name: string
  error?: string
}

export const InputText: FunctionComponent<InputTextProps> = ({
  icon: Icon,
  register,
  disabled,
  name,
  error,
  ...props
}): ReactNode => {
  return (
    <>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
        )}
        <input
          className="w-full border border-gray-300 outline-none py-2 pl-7 pr-2 rounded-lg transition-all duration-300 hover:border-sky-500  focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(186,230,253,1)]"
          disabled={disabled}
          {...(register && register(name))}
          {...props}
        />
      </div>

      <span className="text-red-500 italic text-right text-sm -mt-3">
        {error || '\u00A0'}
      </span>
    </>
  )
}
