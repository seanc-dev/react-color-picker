import React, { useState } from "react";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";

import "./ColorBox.component.css";
import { Link } from "react-router-dom";

const styles = {
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0,0,0,0.5)"
        : "lightgray",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0,0,0,0.5)"
        : "lightgray",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08
        ? "lightgray"
        : "rgba(0,0,0,0.7)",
  },
  moreButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.5)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    height: "30px",
    width: "60px",
    textAlign: "center",
    lineHeight: "30px",
  },
};

function ColorBox({ background, name, id, paletteId, moreLink, classes }) {
  const [copyTimeout, setCopyTimeout] = useState(false);
  const changeCopyState = () => {
    setCopyTimeout(true);
    setTimeout(() => setCopyTimeout(false), 1500);
  };
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className="ColorBox" style={{ background }}>
        <div
          style={{ background }}
          className={`copy-overlay ${copyTimeout && "show"}`}
        />
        <div className={`copy-msg ${copyTimeout && "show"}`}>
          <h1 className={classes.copyText}>Copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={`copy-button ${classes.copyButton}`}>Copy</button>
        </div>
        {moreLink && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={stopPropagation}>
            <span className={classes.moreButton}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
