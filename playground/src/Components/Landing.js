import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <h1>David Alexander Morales</h1>
        <span>Full Stack Web Developer | UX/UI Designer</span>
        <p>I spend my time manipulating ideas on screens.</p>
        <div>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
          <FontAwesomeIcon icon={["fab", "free-code-camp"]} />
        </div>
      </div>
    );
  }
}
