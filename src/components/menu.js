import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from './icon-button';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false,
      isMobile: true,
    };
  }

  toggleMenu() {
    const { showMobileMenu } = this.state;
    this.setState({ showMobileMenu: !showMobileMenu });
  }

  getToggle() {
    const { showMobileMenu } = this.state;
    let icon = showMobileMenu ? (
      <i className="fa fa-times" />
    ) : (
      <i className="fa fa-bars" />
    );
    return (
      <IconButton
        tabIndex="0"
        key={showMobileMenu}
        onClick={this.toggleMenu.bind(this)}
      >
        {icon}
      </IconButton>
    );
  }

  getRoutes() {
    const { routes } = this.props;
    return Object.keys(routes)
      .filter((route) => !routes[route].hidden)
      .map((route) => {
        return (
          <li key={route}>
            <NavLink
              activeClassName="selected"
              to={routes[route].default || routes[route].url}
              onClick={this.toggleMenu.bind(this)}
            >
              {routes[route].name}
            </NavLink>
          </li>
        );
      });
  }

  getMenuItems() {
    return (
      <nav className="menu">
        <ul>{this.getRoutes()}</ul>
      </nav>
    );
  }

  getMobileMenu() {
    const { isMobile, showMobileMenu } = this.state;
    if (!isMobile || !showMobileMenu) return;
    return (
      <div className="mobile-menu-container">
        <div className="content-wrapper">{this.getMenuItems()}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="menu-toggle-container">
        {this.getToggle()}
        {this.getMobileMenu()}
      </div>
    );
  }
}

export default Menu;
