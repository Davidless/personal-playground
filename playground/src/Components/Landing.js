import React, { Component } from "react";
import { Footer } from "./Footer";
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
          When I'm not brainstorming new concepts, I like to challenge myself
          with bodyweight exercises and enjoy zoning out to an eclectic mix of
          sounds.
          <br />
          <br />
          Project page under construction
        </p>
        <div className="LandingButtons">
          <button type="button" disabled className="Project-Button">
            View Projects
          </button>
          {/* <button className="Project-Contact">Contact Me</button> */}
        </div>
        <Footer />
      </div>
    );
  }
}
