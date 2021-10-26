import React from "react";

class IconButton extends React.Component {
  render() {
    return (
      <div className="button icon-button" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default IconButton;
