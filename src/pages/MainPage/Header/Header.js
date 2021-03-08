import React, { Component } from "react";
import Media from "react-media";

import HeaderSmallWidth from "./HeaderSmallWidth";
import HeaderMediumWidth from "./HeaderMediumWidth";
import HeaderLargeWidth from "./HeaderLargeWidth";

class Header extends Component {
  state = {};

  render() {
    return (
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1223px)",
          large: "(min-width: 1224px)",
        }}>
        {(matches) => (
          <>
            {matches.small && <HeaderSmallWidth menuList={this.state.menuList} />}
            {matches.medium && <HeaderMediumWidth menuList={this.state.menuList} />}
            {matches.large && <HeaderLargeWidth menuList={this.state.menuList} />}
          </>
        )}
      </Media>
    );
  }
}

export default Header;
