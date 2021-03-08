import React from "react";
import { Route, Switch } from "react-router-dom";

import MainNav from "../pages/MainNav";
import ErrorNav from "../pages/ErrorNav";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainNav} />
      <Route path="/regulamin" component={ErrorNav} />
      <Route path="" component={ErrorNav} />
    </Switch>
  );
};

export default Navigation;
