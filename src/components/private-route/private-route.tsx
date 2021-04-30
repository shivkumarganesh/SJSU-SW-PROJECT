import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
  isLoggedIn: boolean;
}> = (props) => {
  const condition = props.isLoggedIn;
  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" exact />
  );
};
export default PrivateRoute;
