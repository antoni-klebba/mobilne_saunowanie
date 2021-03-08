import React from "react";
import { Link } from "react-router-dom";
import "../styles/layouts/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="top_footer">
        <div className="container">
          <div className="footer_phone_number">
            <a className="link_reset" rel="nofollow" href="tel: 607 327 678">
              Zadzwoń:<span> 607 327 678</span>
            </a>
          </div>
        </div>
      </div>
      <div className="middle_footer">
        <p className="adress">
          <a
            className="link_reset"
            target="_blank"
            href="https://www.google.com/maps/place/Swarzewo/?hl=pl-PL">
            Swarzewo woj. Pomorskie
          </a>
        </p>
      </div>
      <div className="bottom_footer">
        <div className="container">
          <p>&copy;2021 Mobilna Sauna</p>

          <p>
            <Link className="link_reset" to="/regulamin">
              Regulamin
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
