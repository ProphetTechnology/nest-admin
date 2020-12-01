import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Admin from "@pages";
import Login from "@pages/Login";
import NoMatch from "@pages/NoMatch";
import Home from "@pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Redirect exact from={"/"} to={"/login"} />
          <Route path={"/login"} component={Login} />
          <Route
            path={"/admin"}
            render={() => (
              <Admin>
                <Switch>
                  <Redirect exact from={"/admin"} to={"/admin/home"} />
                  <Route path={"/admin/home"} component={Home} />

                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </App>
    </Router>
  );
};

export default AppRouter;
