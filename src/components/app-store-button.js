import React from "react";
import AppleStore from "../assets/ios.png";
import Lang from "../stores/lang";

class AppStoreButton extends React.Component {
  trackClick() {
    if (!ga) return;
    ga("send", {
      hitType: "event",
      eventCategory: "Download",
      eventAction: "Click",
      eventLabel: "AppleStore",
    });
  }

  render() {
    return (
      <a
        className="app-store-button"
        href={Lang.getTerm("appStoreLink")}
        onClick={this.trackClick.bind(this)}
        target="_blank"
      >
        <img src={AppleStore} />
      </a>
    );
  }
}

export default AppStoreButton;
