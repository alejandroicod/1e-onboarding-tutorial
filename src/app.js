import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import BasePage from './pages/basePage';
import PageHeaderToolbar from './components/page-header-toolbar';
import Footer from './components/footer';
import Routes from './routes';

class App extends BasePage {
  getRoutes() {
    let routes = Routes();
    return Object.keys(routes).map((route) => {
      return (
        <Route
          key={route}
          exact
          path={routes[route].url}
          component={routes[route].page}
        />
      );
    });
  }

  getLocalizedRoutes() {
    let routes = Routes();
    return Object.keys(routes).map((route) => {
      return (
        <Route
          exact
          strict
          key={`localized-${route}`}
          path={`/:locale(en|es)?${routes[route].url}`}
          component={routes[route].page}
        />
      );
    });
  }

  render() {
    return (
      <Router>
        <PageHeaderToolbar />
        <Switch>
          <Redirect exact from="/" to="/tutorial" />
          {/* {this.getLocalizedRoutes()} */}
          {this.getRoutes()}
        </Switch>
      </Router>
    );
  }
}

export default App;
