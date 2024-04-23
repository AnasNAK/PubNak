import React from 'react';
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './contexts/ContextProvider.jsx'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
       <RouterProvider router={router}/>
       <ToastContainer/>
   </ContextProvider>
   
  </React.StrictMode>,
)
