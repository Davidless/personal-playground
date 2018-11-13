import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

export const Footer = () => (
  <div className="Footer">
    <div className="FooterIcons">
      <a href="https://www.linkedin.com/in/davidamis/">
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
      </a>
      <a href="https://github.com/Davidless">
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </a>
      <a href="https://dribbble.com/Davidless">
        <FontAwesomeIcon icon={["fab", "dribbble"]} size="2x" />
      </a>
      <a href="https://www.behance.net/damorales8d21e">
        <FontAwesomeIcon icon={["fab", "behance"]} size="2x" />
      </a>
      <a href="https://www.freecodecamp.org/davidless">
        <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="2x" />
      </a>
    </div>
    <span className="FooterCopy">
      <FontAwesomeIcon icon="copyright" /> 2018 David Alexander Morales
    </span>
  </div>
);
