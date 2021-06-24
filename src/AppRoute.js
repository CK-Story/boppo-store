import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthentication } from "./app/utils/authentication";

const AppRoute = ({
  component: Component,
  path,
  exact,
  isPrivate,
  ...props
}) => {
  const { isAuthenticated } = useAuthentication();
  if (isPrivate) {
    if (isAuthenticated) {
      return (
        <Route
          path={path}
          exact={exact}
          render={(props) => <Component {...props} />}
          {...props}
        />
      );
    } else {
      return <Redirect to={"/login"} />;
    }
  } else {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => <Component {...props} />}
        {...props}
      />
    );
  }
};

export default AppRoute;
