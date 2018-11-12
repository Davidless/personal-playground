import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

export const Footer = () => (
  <div className="Footer">
    <div className="FooterIcons">
      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
      <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      <FontAwesomeIcon icon={["fab", "dribbble"]} size="2x" />
      <FontAwesomeIcon icon={["fab", "behance"]} size="2x" />
      <FontAwesomeIcon icon={["fab", "free-code-camp"]} size="2x" />
    </div>
    <span className="FooterCopy">
      <FontAwesomeIcon icon="copyright" /> 2018 David Alexander Morales
    </span>
  </div>
);
