import { IconType } from 'react-icons'
import { useForm } from 'react-hook-form'

export type InputTextProps = {
  icon?: IconType
  register: ReturnType<typeof useForm>['register']
  type: 'text' | 'email'
  id?: string
  placeholder: string
  disabled?: boolean
  name: string
}
