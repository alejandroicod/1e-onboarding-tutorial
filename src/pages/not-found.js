import React, { Fragment } from 'react';
import Footer from '../components/footer';

class NotFoundPage extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Fragment>
        <div className="content-wrapper full-body not-found">
          <div className="page-article">
            <h2>404 Not Found</h2>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default NotFoundPage;
