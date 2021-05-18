import React, { Component } from "react";
import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components/macro";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Another h1</h1>
      </div>
    );
  }
}

export default App;
