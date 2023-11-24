import React, { Fragment, useState } from "react";

import Nav from "./nav";
import Hero from "../pages/Hero";
import Content from "../pages/Content";
import Cards from "../pages/Cards";
import Footer from "../pages/Footer";

export default ({ children }) => {
  return (
    <Fragment>
      <Nav />
      <div className="container-fluid">{children}</div>
      <Hero />
      <Content order="-1" />
      <Content order="1" />

      <Footer />
    </Fragment>
  );
};
