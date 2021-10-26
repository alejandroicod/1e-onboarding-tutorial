import React from "react";
import AppStoreButton from "./app-store-button";
import GooglePlayButton from "./google-play-button";

import {
  TwitterHashtagButton,
  TwitterFollowButton,
  TwitterMentionButton,
} from "react-twitter-embed";

class SideContent extends React.Component {
  render() {
    return (
      <aside className="side-content">
        <div className="fixed-container">
          {/* <h2>Checkout our video</h2>
          <iframe
            width="170"
            height="350"
            src="https://www.youtube.com/embed/FT-kWj6S0c8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <h2>Download app</h2>
          <div>
            <AppStoreButton />
          </div>
          <div>
            <GooglePlayButton />
          </div>
          <h2>Leave your feedback</h2>
          <TwitterHashtagButton tag={"trainupp"} />
          <TwitterMentionButton screenName={"train_upp"} />
          <TwitterFollowButton screenName={"train_upp"} />
        </div>
      </aside>
    );
  }
}

export default SideContent;
