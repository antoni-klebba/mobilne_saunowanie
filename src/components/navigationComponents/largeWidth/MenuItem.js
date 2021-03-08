import React from "react";

const MenuItem = ({ path, text }) => {
  return (
    <div className="element">
      <a className="link_reset" href={path}>
        {text}
      </a>
    </div>
  );
};

export default MenuItem;
