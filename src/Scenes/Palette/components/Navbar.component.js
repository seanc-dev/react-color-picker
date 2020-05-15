import React from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Navbar.component.css";

function Navbar({ level, setLevel }) {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/">ColourPaletteBuilder</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={setLevel}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
