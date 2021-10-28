import React from 'react';
import AdminAvatar from '../assets/admin-avatar.png';
import BubbleTip from '../assets/bubble-tip.png';

class Tip extends React.Component {
  render() {
    return (
      <div className="tip flex-container" {...this.props}>
        <div className="avatar">
          <img src={AdminAvatar} />
          <img className="bubble-tip" src={BubbleTip} />
        </div>
        <div className="content flex-box">{this.props.children}</div>
      </div>
    );
  }
}

export default Tip;
