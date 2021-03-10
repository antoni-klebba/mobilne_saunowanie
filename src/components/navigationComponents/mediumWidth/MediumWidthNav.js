import React from "react";
import MenuItem from "./MenuItem";

import logo from "../../../images/logos/logo1.png";

const MediumWidthNav = (props) => {
  const menu = props.menuList.map((item, index) => <MenuItem key={index} {...item} />);

  return (
    <div className="med_nav_bar">
      <div className="med_nav_container">
        <div className="med_logo">
          <img src={logo} alt="Mobilna Sauna" />
        </div>
        <div className="med_nav">{menu}</div>
      </div>
    </div>
  );
};

export default MediumWidthNav;
