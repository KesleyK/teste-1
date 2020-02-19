import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import IndexStyle from './styled-components/Index-style';

ReactDOM.render(
  <Fragment>
    <App />
    <IndexStyle />
  </Fragment>,
  document.getElementById("root")
);
