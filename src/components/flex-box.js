import React from "react";

class FlexBox extends React.Component {
  render() {
    const { className, style } = this.props;

    return (
      <div className={`flex-box ${className}`} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default FlexBox;
