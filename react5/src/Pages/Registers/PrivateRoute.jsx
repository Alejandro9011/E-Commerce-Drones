import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebarr/Sidebar';

export const PrivateRoute = ({ children }) => {
  const { state } = useLocation();

  console.log(state?.username);

  return state?.logged ? (
    <Sidebar username={state?.username}>{children}</Sidebar>
  ) : (
    <Navigate to='/login' replace />
  );
};