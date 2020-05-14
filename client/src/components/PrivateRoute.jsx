import React from "react";
import jwt from "jsonwebtoken";
import { Route, Redirect } from "react-router-dom";

const checkForJWTToken = () => {
  const token = localStorage.getItem("jwtToken");
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    return !!decoded;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (checkForJWTToken()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;