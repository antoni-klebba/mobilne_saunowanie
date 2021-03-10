import React from "react";
import MenuItem from "./MenuItem";

import logo from "../../../images/logos/logo1.png";

const LargeWidthNav = (props) => {
  const menu = props.menuList.map((item, index) => <MenuItem key={index} {...item} />);

  return (
    <div className="lar_nav_bar">
      <div className="lar_nav_container">
        <div className="lar_logo">
          <img src={logo} alt="Mobilna Sauna" />
        </div>
        <div className="lar_nav">{menu}</div>
      </div>
    </div>
  );
};

export default LargeWidthNav;
