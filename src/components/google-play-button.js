import React from "react";
import Lang from "../stores/lang";
import PlayStore from "../assets/google.png";

class GooglePlayButton extends React.Component {
  trackClick() {
    if (!ga) return;
    ga("send", {
      hitType: "event",
      eventCategory: "Download",
      eventAction: "Click",
      eventLabel: "GooglePlay",
    });
  }

  render() {
    return (
      <a
        className="app-store-button"
        href={Lang.getTerm("googlePlayLink")}
        onClick={this.trackClick.bind(this)}
        target="_blank"
      >
        <img src={PlayStore} style={{ height: "48px" }} />
      </a>
    );
  }
}

export default GooglePlayButton;
