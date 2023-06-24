import React from "react";
import Root from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

Root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#weather")
);
