import { FunctionComponent, ReactNode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthLayout } from './layouts/auth/AuthLayout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ForgetPassword } from './pages/ForgetPassword'
import { ChangePassword } from './pages/ChangePassword'
import { Error404 } from './pages/Error404'
// import styles from './App.module.css'

export const App: FunctionComponent = (): ReactNode => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="change-password/:id" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
