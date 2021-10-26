import React from 'react';
import { NavLink } from 'react-router-dom';

import Routes from '../routes';
import Lang from '../stores/lang';

class Footer extends React.Component {
  getRoutes() {
    let routes = Routes();
    return Object.keys(routes)
      .filter((route) => !routes[route].hidden)
      .map((route) => {
        return (
          <li key={route}>
            <NavLink activeClassName="selected" to={routes[route].url}>
              {routes[route].name}
            </NavLink>
          </li>
        );
      });
  }

  onPageChange() {
    this.props.onPageChange(2);
  }

  render() {
    return (
      <footer className="footer" {...this.props}>
        <div className="content-wrapper">
          <div className="flex-container">
            <div className="flex-box">
              <a className="button">Help</a>
            </div>
            <div className="flex-box"></div>
            <div className="flex-box">
              <a className="button">Back</a>
              <a className="button" onClick={this.onPageChange}>
                Next
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
