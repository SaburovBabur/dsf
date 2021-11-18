import React from "react";
import Auth from "#/#auth";
import Home from "#/#home";
import {
  Route,
  NavLink,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import Admin from "#/#admin/index";

function App(props) {
  return (
    <>
      <Switch>
        <Route path={`/auth`}>
          <div className="container  | h-full w-full">
            <Auth />
          </div>
        </Route>

        <Route path={`/home/:section`}>
          <div className="container  | h-full w-full">
            <Home />
          </div>
        </Route>

        <Route path={`/admin`}>
          <Admin />
        </Route>

        <Redirect
          to={{
            pathname: "/home/main",
          }}
        />
      </Switch>
    </>
  );
}

export default App;
