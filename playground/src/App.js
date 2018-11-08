import React, { Component } from "react";
import "./App.css";

import NavBar from "./Components/Bars/NavBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Bars/Footer";

class App extends Component {
  state = {};

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
