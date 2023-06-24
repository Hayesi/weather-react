import React, { component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./Navigation";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Weather />
      </div>
    );
  }
}
