import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    open: this.props.open ? this.props.open : false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return { open: nextProps.open };
    } else return null;
  }
  menu = this.props.menuList.map((item, index) => <MenuItem key={index} {...item} />);

  render() {
    return (
      <div className={`menu ${this.state.open} small_width`}>
        {this.state.open ? <div className="menu_list">{this.menu}</div> : null}
      </div>
    );
  }
}
export default Menu;
