import React from "react";
import { Link } from "react-router-dom";

function PaletteList({ palettes }) {
  console.log(palettes);
  return (
    <div>
      <h1 className="PaletteList-header">Color Palette Builder</h1>
      {palettes.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`} key={palette.id}>
            {palette.paletteName}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default PaletteList;