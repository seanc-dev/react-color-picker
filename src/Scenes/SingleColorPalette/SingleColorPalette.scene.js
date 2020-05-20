import React, { useState } from "react";
import ColorBox from "../Palette/components/ColorBox.component";

function SingleColorPalette({
  palette: { colors },
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
      <h1>Single Color Palette</h1>
      <div className="Palette-colors">
        {shades.map((shade) => (
          <ColorBox
            key={shade.id}
            id={shade.id}
            paletteId={paletteId}
            background={shade[format]}
            name={shade.name}
            moreLink={false}
          />
        ))}
      </div>
    </div>
  );
}

export default SingleColorPalette;
