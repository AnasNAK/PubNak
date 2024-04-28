import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/store'; 
import AdminDashboardContainer from './containers/Dashboard/Admin/AdminDashboardContainer';

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={AdminDashboardContainer} />
      </Router>
    </Provider>
  );
}

export default App;
