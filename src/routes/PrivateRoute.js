import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  //cookie is set or not
  const access_token = Cookies.get("token");
  const isAuthenticated = !!access_token;
  //   console.log("access token", access_token);
  //   console.log("isAuthenticated", isAuthenticated);

  if (isAuthenticated) {
    return <Route {...props} />;
    //<Route path="/dashbhoard" component="" />
  } else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
