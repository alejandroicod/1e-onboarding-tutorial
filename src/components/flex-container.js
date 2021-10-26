import React from "react";

class FlexContainer extends React.Component {
  render() {
    const { className, style } = this.props;

    return (
      <div className={`flex-container ${className}`} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default FlexContainer;
