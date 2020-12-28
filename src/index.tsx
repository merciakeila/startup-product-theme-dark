import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";
import App from "./App";

smoothscroll.polyfill();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
