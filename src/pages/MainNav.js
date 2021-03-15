import React, { Component } from "react";
import Media from "react-media";

import SmallWidthNav from "../components/navigationComponents/smallWidth/SmallWidthNav";
import MediumWidthNav from "../components/navigationComponents/mediumWidth/MediumWidthNav";
import LargeWidthNav from "../components/navigationComponents/largeWidth/LargeWidthNav.js";

class MainNav extends Component {
  state = {
    menuList: [
      {
        text: "O nas",
        path: "#o-nas",
        delay: "0s",
        scroll: this.props.scrollToAbout,
      },
      {
        text: "Oferta",
        path: "#oferta",
        delay: "0.15s",
        scroll: this.props.scrollToOffer,
      },
      {
        text: "Galeria",
        path: "#galeria",
        delay: "0.30s",
        scroll: this.props.scrollToGallery,
      },
      {
        text: "Kontakt",
        path: "#stopka",
        delay: "0.45s",
        scroll: this.props.scrollToFooter,
      },
    ],
  };
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
            {matches.small && <SmallWidthNav menuList={this.state.menuList} />}
            {matches.medium && <MediumWidthNav menuList={this.state.menuList} />}
            {matches.large && <LargeWidthNav menuList={this.state.menuList} />}
          </>
        )}
      </Media>
    );
  }
}

export default MainNav;
