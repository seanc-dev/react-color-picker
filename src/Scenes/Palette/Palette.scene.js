import React from "react";

import ColorBox from "../../components/ColorBox.component";
import Navbar from "../../components/Navbar.component";

import "./Palette.scene.css";
import { useState } from "react";
import Footer from "../../components/Footer.component";

function Palette({ palette: { colors, paletteName, emoji, id } }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      id={color.id}
      paletteId={id}
      background={color[format]}
      name={color.name}
      moreLink
    />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
        showSlider
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default Palette;
