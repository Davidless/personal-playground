import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <span>David A Morales</span>
        <FontAwesomeIcon icon="copyright" />
        <span>2018</span>
      </div>
    );
  }
}
