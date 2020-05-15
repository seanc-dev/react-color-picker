import React from "react";

import ColorBox from "./components/ColorBox.component";
import Navbar from "./components/Navbar.component";

import "./Palette.scene.css";
import { useState } from "react";

function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar level={level} setLevel={setLevel} />
      {/* NavBar component here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

export default Palette;
