import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";

import Root from "./Root.jsx";

window.appReact = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    console.error(err);
    return <div>Something went wrong</div>;
  }
});

