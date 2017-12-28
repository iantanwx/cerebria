import * as React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

exports.replaceRouterComponent = ({ history }) =>
  ({ children }) => <Router history={history}>{children}</Router>;
