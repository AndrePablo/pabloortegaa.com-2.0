import React, { Component } from "react";
import FadeTextChanger from "./FadeTextChanger";
import herovideo from "../assets/herovideo.mp4";

const SUBTITLES = ["software engineer", "full-stack developer", "innovator"];

class HeroBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: SUBTITLES,
    };
  }

  render() {
    return (
      <div className="hero-custom-container">
        <div className="hero-custom-bg">
          <video autoPlay loop muted src={herovideo} type="video/mp4"></video>
        </div>
        <div className="hero-custom-body">
          <h1 className="hero-custom-h1"> Pablo Ortega</h1>
          <p className="hero-custom-p">
            <FadeTextChanger textList={this.state.subtitles} />{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default HeroBanner;
