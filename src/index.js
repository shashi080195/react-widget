import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const init = (config) => {
  ReactDOM.render(<App config={config} />, document.getElementById("root"));
};
serviceWorker.unregister();
