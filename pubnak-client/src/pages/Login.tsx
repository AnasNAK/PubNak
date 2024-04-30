import React from 'react';
import LoginPage from '../components/pages/auth/Login';
import withGuest from '../utils/withGuest';


const Login: React.FC = () => {
  return <LoginPage />;
};

export default withGuest(Login , '/Posts');