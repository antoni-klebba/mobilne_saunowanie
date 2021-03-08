import React, { Component } from "react";

class Menu extends Component {
  state = {
    open: this.props.open ? this.props.open : false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return { open: nextProps.open };
    } else return null;
  }

  render() {
    return (
      <div className={`menu ${this.state.open} small_width`}>
        {this.state.open ? <div className="menu_list">{this.props.children}</div> : null}
      </div>
    );
  }
}
export default Menu;
