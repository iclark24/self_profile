import React from "react";
import { Menu, } from "semantic-ui-react";
import { Link, withRouter, } from 'react-router-dom'


class NavBar extends React.Component {

  render() {
    return(
      <Menu inverted size="massive" pointing secondary>
          <Menu.Item href="/" active={this.props.location.pathname === "/"}>
            Home
          </Menu.Item>
          <Menu.Item href="/about" active={this.props.location.pathname === "/about"}>
            About
          </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(NavBar)