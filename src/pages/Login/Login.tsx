import { FunctionComponent, ReactNode, FormEvent } from 'react'
import { RiMailLine } from 'react-icons/ri'

import { InputText } from '../../components/Form/InputText'
import { Password } from '../../components/Form/Password'
import { Button } from '../../components/Form/Button'

import styles from './Login.module.css'

export const Login: FunctionComponent = (): ReactNode => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <div className={styles.form}>
        <div className="mb-10">
          <h1 className={styles.title}>Log In</h1>
        </div>
        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={(event) => onSubmit(event)}
        >
          <InputText
            type="email"
            placeholder="Email"
            icon={RiMailLine}
            label="Email"
            value=""
            id="email"
            disabled={false}
            onChange={() => {}}
          />
          <Password
            value=""
            id="password"
            placeholder="Password"
            disabled={false}
            onChange={() => {}}
            toggleMask
          />
          <Button>Log In</Button>
        </form>
      </div>
    </>
  )
}
