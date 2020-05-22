import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./Footer.styles";

function Footer({ paletteName, emoji, classes }) {
  return (
    <footer className={classes.paletteFooter}>
      {`${paletteName}`}
      <span className={classes.emoji}> {emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Footer);
