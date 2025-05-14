import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import Root from "./Root.jsx";

import "./style.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    console.error(err);
    return <div>Something went wrong</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
