import React, { useState } from "react";
import uuid from "uuid/v4";

import ColorBox from "../../components/ColorBox.component";
import Navbar from "../../components/Navbar.component";
import Footer from "../../components/Footer.component";

function SingleColorPalette({
  palette: { colors, paletteName, emoji },
  match: {
    params: { paletteId, colorId },
  },
}) {
  const [format, setFormat] = useState("hex");
  let shades = [];
  for (let level in colors) {
    shades.push(colors[level].find((color) => color.id === colorId));
  }
  shades = shades.slice(1);
  return (
    <div className="Palette">
      <Navbar format={format} setFormat={setFormat} showSlider={false} />
      <div className="Palette-colors">
        {shades.map((shade) => (
          <ColorBox
            key={uuid()}
            id={shade.id}
            paletteId={paletteId}
            background={shade[format]}
            name={shade.name}
            moreLink={false}
          />
        ))}
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default SingleColorPalette;
