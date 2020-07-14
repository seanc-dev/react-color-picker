import React from "react";

import useStyles from "./Footer.styles";

function Footer({ paletteName, emoji, forPalette = true }) {
  const classes = useStyles(forPalette);
  return (
    <footer className={classes.paletteFooter}>
      {`${paletteName}`}
      <span className={classes.emoji}> {emoji}</span>
    </footer>
  );
}

export default Footer;
