import React from "react";
import "../styles/layouts/TopContactBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const TopContactBar = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="phone_number_container">
          <a className="phone_number link_reset" rel="nofollow" href="tel: 607 327 678">
            <span className="phone_icon">
              <FontAwesomeIcon icon={faPhoneSquareAlt} />
            </span>
            <strong>607 327 678</strong>
          </a>
        </div>
      </div>
      <div className="socials">
        <a
          className="fb_icon link_reset"
          target="_blank"
          href="https://www.facebook.com/gabinetmorski">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          className="map_icon link_reset"
          target="_blank"
          href="https://www.google.pl/maps/place/Mobilne+Saunowanie/@54.7569078,18.3954327,17z/data=!3m1!4b1!4m5!3m4!1s0x46fdb33b199b021d:0x6772620e76f48786!8m2!3d54.7569078!4d18.3976214">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </a>
      </div>
    </div>
  );
};

export default TopContactBar;
