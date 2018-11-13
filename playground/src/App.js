import React, { Component } from "react";
import "./App.css";

import Landing from "./Components/Landing";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCopyright);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
