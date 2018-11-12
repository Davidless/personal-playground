import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1 className="LandingName">David Alexander Morales</h1>
        <span className="LandingTitle">
          Full Stack Web Developer | UX/UI Designer
        </span>
        <p className="LandingBlurb">
          I spend my time manipulating ideas on screens.
        </p>
        <div className="LandingButtons">
          <button className="Project-Button">View Projects</button>
          <button className="Project-Contact">Contact Me</button>
        </div>
      </div>
    );
  }
}
