import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";

import ColorBox from "../../components/ColorBox.component";
import Navbar from "../../components/Navbar.component";
import Footer from "../../components/Footer.component";

import styles from "./Palette.styles";

function Palette({ palette: { colors, paletteName, emoji, id }, classes }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      key={color.id}
      id={color.id}
      paletteId={id}
      background={color[format]}
      name={color.name}
      fullPalette
    />
  ));
  return (
    <div className={classes.palette}>
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
        showSlider
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);
