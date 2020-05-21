import React, { useState } from "react";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.component.css";
import { Link } from "react-router-dom";

function ColorBox({ background, name, id, paletteId, moreLink }) {
  const [copyTimeout, setCopyTimeout] = useState(false);
  const changeCopyState = () => {
    setCopyTimeout(true);
    setTimeout(() => setCopyTimeout(false), 1500);
  };
  const stopPropagation = (e) => e.stopPropagation();
  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.6;
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className="ColorBox" style={{ background }}>
        <div
          style={{ background }}
          className={`copy-overlay ${copyTimeout && "show"}`}
        />
        <div className={`copy-msg ${copyTimeout && "show"}`}>
          <h1 className={isLightColor ? "dark-text" : ""}>Copied!</h1>
          <p className={isLightColor ? "dark-text" : ""}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? "light-text" : ""}>{name}</span>
          </div>
          <button className={`copy-button ${isLightColor ? "dark-text" : ""}`}>
            Copy
          </button>
        </div>
        {moreLink && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={stopPropagation}>
            <span className={`see-more ${isLightColor ? "dark-text" : ""}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
