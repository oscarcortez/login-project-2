import { FunctionComponent, ReactNode } from 'react'
import styles from './App.module.css'

export const App: FunctionComponent = (): ReactNode => {
  return (
    <>
      <h1 className={styles.title}>Hi, how are you</h1>
    </>
  )
}
