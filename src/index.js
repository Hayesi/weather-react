import React from "react";
import RootDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

RootDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#weather")
);
