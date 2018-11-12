import React, { Component } from "react";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1 className="LandingName">David Alexander Morales</h1>
        <span className="LandingTitle">
          UX/UI Designer | Full Stack Engineer | Calisthenics Enthusiast
        </span>
        <p className="LandingBlurb">I manipulate ideas for screens. I </p>
        <div className="LandingButtons">
          <button type="button" className="Project-Button">View Projects</button>
          {/* <button className="Project-Contact">Contact Me</button> */}
        </div>
      </div>
    );
  }
}
