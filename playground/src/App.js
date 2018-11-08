import React, { Component } from "react";
import "./App.css";
import SideMenu from "./Components/SideMenu";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <SideMenu />
      </div>
    );
  }
}

export default App;
