import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import Register from "#/#auth/#/Register";
import Login from "#/#auth/#/Login";
import Complete from "#/#auth/#/Complete";

function Auth(props) {
  let router = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${router.path}/login`}>
          <Login />
        </Route>

        <Route path={`${router.path}/register`}>
          <Register />
        </Route>

        <Route path={`${router.path}/complete`}>
          <Complete />
        </Route>

        <Redirect
          to={{
            pathname: "/auth/login",
          }}
        />
      </Switch>
    </>
  );
}

export default Auth;
