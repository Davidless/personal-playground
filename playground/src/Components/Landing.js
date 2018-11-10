import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="LandingIcons">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
          <FontAwesomeIcon icon={["fab", "free-code-camp"]} />
        </div>
        <div className="LandingButtons">
          <button className="Project-Button">View Projects</button>
          <button className="Project-Contact">Contact Me</button>
        </div>
      </div>
    );
  }
}
