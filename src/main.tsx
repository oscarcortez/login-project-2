import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './main.css'

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
)
