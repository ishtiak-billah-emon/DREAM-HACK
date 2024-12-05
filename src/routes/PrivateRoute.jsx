import React, { Children, useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../component/Loading';


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContex);
  const location = useLocation();
 
  if(loading) {
     return <Loading></Loading>
  }
  if(user && user?.email) {
    return children;
  }
  
  return (
   <Navigate state={location.pathname} to={'/login'}></Navigate>
  );
};

export default PrivateRoute;