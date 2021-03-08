import React, { Component } from "react";

class MenuItem extends Component {
  state = {
    hover: false,
  };

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'lato', sans-serif`,
        cursor: "pointer",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
      },
      line: {
        width: "90%",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay,
      },
    };
    return (
      <div className="small_width" style={styles.container}>
        <div
          className="menu_item"
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}>
          <a className="link_reset" href={this.props.path}>
            {this.props.text}
          </a>
        </div>
        <div className="menu_item_line small_width" style={styles.line} />
      </div>
    );
  }
}

export default MenuItem;
