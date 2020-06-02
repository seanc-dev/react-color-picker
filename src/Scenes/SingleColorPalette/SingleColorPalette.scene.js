import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

import ColorBox from "../../components/ColorBox.component";
import Navbar from "../../components/Navbar.component";
import Footer from "../../components/Footer.component";

import useStyles from "./SingleColorPalette.styles";

function SingleColorPalette(props) {
  const {
    palette: { colors, paletteName, emoji },
    match: {
      params: { paletteId, colorId },
    },
  } = props;

  const classes = useStyles(props);

  const [format, setFormat] = useState("hex");

  let shades = [];
  for (let level in colors) {
    shades.push(colors[level].find((color) => color.id === colorId));
  }
  shades = shades.slice(1);
  const colorBoxes = shades.map((shade) => (
    <ColorBox
      key={uuid()}
      id={shade.id}
      paletteId={paletteId}
      background={shade[format]}
      name={shade.name}
      fullPalette={false}
    />
  ));

  return (
    <div className={classes.singleColorPalette}>
      <Navbar format={format} setFormat={setFormat} showSlider={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${paletteId}`}>GO BACK</Link>
        </div>
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default SingleColorPalette;
