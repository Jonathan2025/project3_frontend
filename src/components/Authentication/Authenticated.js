import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const withAuth = (Component) => {
  return () => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component />;
  };
};

export default withAuth;