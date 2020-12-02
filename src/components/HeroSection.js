/** @format */

import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Untitled.mp4" autoPlay loop muted />
      <h1>Ready To Simplify Your Life?</h1>
      {/* <p>What are you waiting for?</p> */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
