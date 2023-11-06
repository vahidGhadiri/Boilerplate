import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";

import { routes } from "@config";

export type PrivateRouteProps = {
  component: React.ElementType;
} & RouteProps;

const PrivateRoute = ({
  component: Component,
  children,
  ...rest
}: PrivateRouteProps): JSX.Element => {
  const location = useLocation();
  const isAuthenticated = true;
  if (isAuthenticated) {
    return children ? (
      <Route {...rest}>{children}</Route>
    ) : (
      <Route {...rest} render={(props) => <Component {...props} />} />
    );
  } else {
    return (
      <Redirect
        to={{ pathname: routes.login.root, state: { referrer: location } }}
      />
    );
  }
};

export default PrivateRoute;
