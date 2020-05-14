import React from "react";

import ColorBox from "./components/ColorBox.component";

import "./Palette.scene.css";

function Palette({ colors }) {
  const colorBoxes = colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ));
  return (
    <div className="Palette">
      {/* NavBar component here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer goes here */}
    </div>
  );
}

export default Palette;
