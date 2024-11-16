import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth }) => {
  return (isAuth ? <Outlet /> : <Navigate to="/login" />);
};

export default ProtectedRoute;
