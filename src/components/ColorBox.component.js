import React, { useState } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";

import styles from "./Colorbox.styles";

function ColorBox({ background, name, id, paletteId, fullPalette, classes }) {
  const [copyTimeout, setCopyTimeout] = useState(false);
  const changeCopyState = () => {
    setCopyTimeout(true);
    setTimeout(() => setCopyTimeout(false), 1500);
  };
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className={classes.colorBox} style={{ background }}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${
            copyTimeout ? classes.showOverlay : ""
          }`}
        />
        <div
          className={`${classes.copyMessage} ${
            copyTimeout ? classes.showMessage : ""
          }`}
        >
          <h1 className={classes.copyText}>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {fullPalette && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={stopPropagation}>
            <span className={classes.moreButton}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
