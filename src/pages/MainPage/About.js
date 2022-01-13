import React from "react";
import "../../styles/pages/About.css";

const About = () => {
  return (
    <div className="container">
      <div className="background_sheet">
        <div className="text_container">
          <h3>O nas</h3>
          <p>
            Mobilna Sauna powstała z pasji do saunowania na świeżym powietrzu w gronie znajomych
            oraz z chęcią dzielenia jej z innymi. Naszym celem jest umożliwienie relaksu w saunie na
            własnym podwórku lub w innych atrakcyjnych miejscach każdemu kto ma na to ochotę.
            <br />
            <span className="p_gabinet">
              Mobilna Sauna jest uzupełnieniem oferty{" "}
              <a
                className="link_reset link_gabinet"
                target="_blank"
                href="https://www.facebook.com/gabinetmorski">
                Gabinetu Morskiego
              </a>
              , do którego również serdecznie zapraszamy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
