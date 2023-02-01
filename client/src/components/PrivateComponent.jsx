import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
  const auth = localStorage.getItem('logged_university');

  return auth ? <Outlet /> : <Navigate to='/unilogin' />
  
}

export default PrivateComponent