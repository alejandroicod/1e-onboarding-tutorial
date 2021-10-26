import React from 'react';
import CookieConsent from '../components/cookie-consent';

import Menu from './menu';
import { Link } from 'react-router-dom';
import LangPicker from './lang-picker';
import Routes from '../routes';
import Lang from '../stores/lang';
import Logo from '../assets/tachyon-welcome-logo.svg';

class PageHeaderToolbar extends React.Component {
  render() {
    const routes = Routes();
    return (
      <div className="page-header-toolbar">
        <div className="content-wrapper">
          <div className="flex-container">
            {/* <Menu routes={routes} /> */}
            <div className="brand">
              <Link to="/tutorial" tabIndex="0" href="#">
                <img src={Logo} /> <span>{Lang.getTerm('appName')}</span>
              </Link>
            </div>
            {/* <LangPicker /> */}
          </div>
        </div>
        {/* <CookieConsent /> */}
      </div>
    );
  }
}

export default PageHeaderToolbar;
