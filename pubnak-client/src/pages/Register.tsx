import React from 'react';
import RegisterPage from '../components/pages/auth/Register';
import withGuest from '../utils/withGuest';

const Register: React.FC = () => {
  return <RegisterPage />;
};

export default withGuest(Register , '/Posts');