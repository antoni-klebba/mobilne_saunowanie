import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/layouts/Page.css";

import MainPage from "../pages/MainPage/MainPage";
import TermsOfUse from "../pages/TermsOfUse";
import ErrorPage from "../pages/ErrorPage";

const Page = (props) => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <MainPage toAbout={props.toAbout} toOffer={props.toOffer} toGallery={props.toGallery} />
          )}
        />
        <Route path="/regulamin" component={TermsOfUse} />
        <Route path="" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
