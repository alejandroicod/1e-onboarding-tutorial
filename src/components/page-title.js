import React from 'react';

class PageTitle extends React.Component {
  render() {
    return (
      <div className="page-title">
        <div className="content-wrapper">
          <h2>{this.props.children}</h2>
        </div>
      </div>
    );
  }
}

export default PageTitle;
