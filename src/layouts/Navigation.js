import React from "react";
import { Route, Switch } from "react-router-dom";

import MainNav from "../pages/MainNav";
import ErrorNav from "../pages/ErrorNav";

const Navigation = (props) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <MainNav
            scrollToAbout={props.scrollToAbout}
            scrollToOffer={props.scrollToOffer}
            scrollToGallery={props.scrollToGallery}
            scrollToFooter={props.scrollToFooter}
          />
        )}
      />
      <Route path="/regulamin" component={ErrorNav} />
      <Route path="" component={ErrorNav} />
    </Switch>
  );
};

export default Navigation;
