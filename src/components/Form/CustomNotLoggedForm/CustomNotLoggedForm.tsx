import { FunctionComponent, ReactElement, ReactNode } from 'react'
import styles from './CustomNotLoggedForm.module.css'
import 'react-hook-form'

type CustomNotLoggedFormProps = {
  children: React.ReactNode
  title: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  bottomLeftLink?: ReactElement
  bottomRightLink?: ReactElement
}

export const CustomNotLoggedForm: FunctionComponent<
  CustomNotLoggedFormProps
> = ({
  children,
  title,
  onSubmit,
  bottomLeftLink,
  bottomRightLink
}): ReactNode => {
  return (
    <>
      <div className={styles.form}>
        <div className="mb-10">
          <h1 className={styles.title}>{title}</h1>
        </div>
        <form className="flex flex-col gap-3" action="" onSubmit={onSubmit}>
          {children}
        </form>
        <div className="mt-5 text-center">
          {bottomLeftLink}
          {bottomRightLink}
        </div>
      </div>
    </>
  )
}
