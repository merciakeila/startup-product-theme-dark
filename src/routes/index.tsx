import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        {routes.map(({ component, path, name, exact }) => (
          <Route
            path={path}
            component={component}
            name={name}
            key={path}
            exact={!!exact}
          />
        ))}
      </Switch>
    </>
  );
};

export default Routes;
