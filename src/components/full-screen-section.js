import React from "react";

class FullScreenSection extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div
        className={`full-screen-section ${className}`}
        style={{ backgroundImage: `url(${this.props.bgImage})` }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FullScreenSection;
