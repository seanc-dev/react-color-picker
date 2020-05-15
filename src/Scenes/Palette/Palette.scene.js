import React from "react";

import ColorBox from "./components/ColorBox.component";
import Navbar from "./components/Navbar.component";

import "./Palette.scene.css";
import { useState } from "react";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox key={color.name} background={color[format]} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
      />
      {/* NavBar component here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

export default Palette;
