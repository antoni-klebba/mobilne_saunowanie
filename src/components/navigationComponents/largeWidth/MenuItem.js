import React from "react";

const MenuItem = ({ path, text, scroll }) => {
  return (
    <div className="element">
      <a
        onClick={() => scroll()}
        className="link_reset"
        //  href={path}
      >
        {text}
      </a>
    </div>
  );
};

export default MenuItem;
