import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const withAuth = (Component) => {
   
  return (props) => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    console.log("here are the props", props)
    return <Component />;
  };
};

export default withAuth;