import React, { Componnent } from "react";
import { Route, Navigate } from "react-router-dom";
// import isAuth  from "services/isAuth";

const isAuth = true;

const LoggedInPrivateRoute = ({ children }) => {
  if (!isAuth) {
    return <Navigate to='/' />;
  }

  return children;
};

export default LoggedInPrivateRoute;
