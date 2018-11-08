import React, { Component } from "react";
import "./App.css";

import { NavBar } from "./Components/Bars/NavBar";
import { Footer } from "./Components/Bars/Footer";
import About from "./Components/About";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCopyright);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
