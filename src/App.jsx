import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1> Hello User, Welcome to the React World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
