import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Admin from "./pages";

const AppRouter = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Redirect exact from={"/"} to={"/login"} />
          <Route
            path={"/admin"}
            render={() => (
              <Admin>
                <Switch>
                  <Redirect exact from={"/admin"} to={"/admin/home"} />
                </Switch>
              </Admin>
            )}
          />
        </Switch>
      </App>
    </Router>
  );
};

export default AppRouter;
