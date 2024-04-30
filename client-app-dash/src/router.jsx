import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AdminDashboardContainer from './containers/Dashboard/Admin/AdminDashboardContainer';
import Cookies from 'js-cookie';

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  if (!token) {
    navigate('http://localhost:3000/Login', { replace: true });
    return null;
  }

  return children;
}

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><AdminDashboardContainer /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;