import React from "react";
import { Switch, Route } from "react-router";

import about from "./pages/aboutsohaib";
import portfolio from "./pages/portfoliosohaib";
import blog from "./pages/blogsohaib";
import contact from "./pages/contactsohaib";

const Routes = () => (
  <Switch>
    <Route path="/aboutsohaib" exact component={about} />
    <Route path="/portfoliosohaib" exact component={portfolio} />
    <Route path="/blogsohaib" exact component={blog} />
    <Route path="/contactsohaib" exact component={contact} />
  </Switch>
);

export default Routes;
