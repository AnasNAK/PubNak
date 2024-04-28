import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminDashboardContainer from './containers/Dashboard/Admin/AdminDashboardContainer';

function App() {
  return (
    <Router>
      <Route path="/" component={AdminDashboardContainer} />
    </Router>
  );
}

export default App;