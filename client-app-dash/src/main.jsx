import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/store';
import { ContextProvider } from './contexts/ContextProvider.jsx';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router}/>
        <ToastContainer/>
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
);
