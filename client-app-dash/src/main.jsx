import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ContextProvider } from './contexts/ContextProvider';
import App from './App';
import store from './store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>,
);