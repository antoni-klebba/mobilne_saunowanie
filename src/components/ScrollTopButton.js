import React, { Component } from "react";
import "../styles/components/ScrollTopButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

class ScrollTopButton extends Component {
  state = {
    showScroll: false,
  };
  checkScrollTop = () => {
    if (!this.state.showScroll && window.pageYOffset > 300) {
      this.setState({ showScroll: true });
    } else if (this.state.showScroll && window.pageYOffset <= 300) {
      this.setState({ showScroll: false });
    }
  };

  scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  render() {
    window.addEventListener("scroll", this.checkScrollTop);

    return (
      <div
        className="scroll_top_button"
        style={{ display: this.state.showScroll ? "flex" : "none" }}>
        <FontAwesomeIcon className="scrollTop" onClick={this.scrollTop} icon={faArrowCircleUp} />
      </div>
    );
  }
}

export default ScrollTopButton;
