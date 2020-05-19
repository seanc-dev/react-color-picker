import React from "react";

import ColorBox from "./components/ColorBox.component";
import Navbar from "./components/Navbar.component";

import "./Palette.scene.css";
import { useState } from "react";

function Palette({ colors, paletteName, emoji, id }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      id={color.id}
      paletteId={id}
      background={color[format]}
      name={color.name}
    />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {`${paletteName}`}
        <span className="emoji"> {emoji}</span>
      </footer>
    </div>
  );
}

export default Palette;
