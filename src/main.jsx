import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'

import { RouterProvider } from 'react-router'
import router from './Router/router'
import AuthProvider from './Provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
   <RouterProvider router={router}></RouterProvider>
    <ToastContainer position="top-right" autoClose={3000} />
</AuthProvider>
  </StrictMode>,
)
