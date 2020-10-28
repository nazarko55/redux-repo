import React from "react";
import { DataContext } from "./context";

class UserMenu extends React.Component {
  render() {
    const { name, avatar_url } = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${name}`}</span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

UserMenu.contextType = DataContext;

export default UserMenu;