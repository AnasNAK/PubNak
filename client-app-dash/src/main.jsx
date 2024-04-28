// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ContextProvider } from './contexts/ContextProvider.jsx';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import store from './store/store'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
);