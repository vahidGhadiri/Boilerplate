import { Route, Switch } from "react-router-dom";

import { ErrorBoundary } from "@components";
import { Dashboard, Login } from "@features";
import { routes } from "@config";

import PrivateRoute from "./private-route";

//All the pages after successfully login should be handled here
export const PostLoginChunks = () => (
  <ErrorBoundary>
    <Switch>
      <PrivateRoute component={Dashboard} />
    </Switch>
  </ErrorBoundary>
);

export const MainRouter = () => (
  <Switch>
    <Route exact path={routes.login.root} component={Login} />
    <Route component={PostLoginChunks} />
  </Switch>
);

export { MainRouter as App };
