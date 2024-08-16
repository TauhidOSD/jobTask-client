import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <div className='lg:m-16 md:m-4 auto'>
    <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />

      </AuthProvider>
  </StrictMode>
  </div>,
)
