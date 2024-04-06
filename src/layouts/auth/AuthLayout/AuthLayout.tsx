import { FunctionComponent, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './AuthLayout.module.css'
// type Props = {}

export const AuthLayout: FunctionComponent = (): ReactNode => {
  //props: Props
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
