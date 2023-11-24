import React from "react";
import { render } from "react-dom";

import Layout from "./components/layout";

import "./assets/styles/bootstrap.css";
import "./assets/styles/bootstrap.overrides.css";
import "./assets/styles/main.scss";

function App() {
  return <Layout />;
}

render(<App />, document.getElementById("root"));
