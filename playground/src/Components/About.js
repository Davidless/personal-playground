import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>David Alexander Morales</h1>
        <span>Full Stack Web Developer | UX/UI Designer</span>
        <p>I spend my time manipulating ideas on screens.</p>
        <div>
          <FontAwesomeIcon icon={["fab", "free-code-camp"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
        </div>
      </React.Fragment>
    );
  }
}
