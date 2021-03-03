import React, { Component, useContext } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { UserContext } from "./UserProvider";

const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const { currentUser } = useContext<any>(UserContext);

  return <Route {...rest} render={({ location }) => (!!currentUser ? children : <Redirect to={"/login"} />)} />;
};
export default PrivateRoute;
