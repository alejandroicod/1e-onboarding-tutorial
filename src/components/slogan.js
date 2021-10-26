import React from "react";
import FullScreenSection from "../components/full-screen-section";
import FlexContainer from "../components/flex-container";
import FlexBox from "../components/flex-box";
import BgImage from "../assets/bg.jpg";
import AppStoreButton from "../components/app-store-button";
import PlayStoreButton from "../components/google-play-button";
import Screenshot from "../assets/screenshot.png";
import Lang from "../stores/lang";

class Slogan extends React.Component {
  render() {
    return (
      <FullScreenSection bgImage={BgImage}>
        <div className="content-wrapper home-page">
          <FlexContainer>
            <FlexBox className="screenshot-container animate-fade-in">
              <img className="screenshot" src={Screenshot} />
            </FlexBox>
            <FlexBox className="slogan-container animate-fade-in-delayed">
              <h1>{Lang.getTerm("slogan")}</h1>
              <p>{Lang.getTerm("slogan2")}</p>
              <FlexContainer>
                <FlexBox>
                  <AppStoreButton />
                  <PlayStoreButton />
                </FlexBox>
              </FlexContainer>
            </FlexBox>
          </FlexContainer>
        </div>
      </FullScreenSection>
    );
  }
}

export default Slogan;
