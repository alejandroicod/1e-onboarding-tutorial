import React from "react";
import FullScreenSection from "../components/full-screen-section";
import BgImageYellow from "../assets/bg-yellow.jpg";
import Lang from "../stores/lang";

class VideoSection extends React.Component {
  render() {
    return (
      <FullScreenSection bgImage={BgImageYellow} className="video-section">
        <div className="content-wrapper">
          <h2>{Lang.getTerm("checkoutVideo")}</h2>
          <iframe
            src="https://www.youtube.com/embed/FT-kWj6S0c8"
            frameBorder="0"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </FullScreenSection>
    );
  }
}

export default VideoSection;
