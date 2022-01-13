import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/ErrorNav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import logo1 from "../images/logos/logo1.png";

const ErrorNavigation = () => {
  return (
    <div className="error_nav_bar">
      <div className="container">
        <div className="back_arrow">
          <Link className="link_reset" to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <div className="logo">
          <Link className="link_reset" to="/">
            <img src={logo1} alt="Mobilna Sauna" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorNavigation;
