import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1 className="LandingName">David Alexander Morales</h1>
        <span className="LandingTitle">
          UX/UI Designer | Full Stack Engineer
        </span>
        <p className="LandingBlurb">
          I manipulate ideas for screens and design seamless user experiences.
        </p>
        <div className="LandingButtons">
          <button type="button" disabled className="Project-Button">
            View Projects
          </button>
          {/* <button className="Project-Contact">Contact Me</button> */}
        </div>
      </div>
    );
  }
}
