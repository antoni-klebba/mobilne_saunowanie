import React, { Component } from "react";

class MenuButton extends Component {
  state = {
    open: this.props.open ? this.props.open : false,
    color: this.props.color ? this.props.color : "black",
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return { open: nextProps.open };
    } else return null;
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      },
      line: {
        background: this.state.color,
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
      },
    };
    return (
      <div
        className="menu_button small_width"
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }>
        <div className="line line_top" style={{ ...styles.line, ...styles.lineTop }} />
        <div className="line line_middle" style={{ ...styles.line, ...styles.lineMiddle }} />
        <div className="line line_bottom" style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

export default MenuButton;
