import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { NavMenu } from "../../common/config";

import "./index.less";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class NavLeft extends Component {
  componentWillMount() {
    const menuTree = this.renderMenu(NavMenu);

    this.setState({
      menuTree,
    });
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <MenuItem title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </MenuItem>
      );
    });
  };

  render() {
    return (
      <div>
        <div className={"logo"}>
          <img src={"/images/logo.png"} alt={"logo图片"} />
          <h1>Nest Admin</h1>
        </div>
        <Menu theme={"dark"}>{this.state.menuTree}</Menu>
      </div>
    );
  }
}

export default NavLeft;
