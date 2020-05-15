import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import ColorBox from "./components/ColorBox.component";

import "./Palette.scene.css";
import { useState } from "react";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={setLevel}
      />
      {/* NavBar component here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

export default Palette;
