import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.component.css";
import { Link } from "react-router-dom";

function ColorBox({ background, name, id, paletteId }) {
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
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <Link to={`/palette/${paletteId}/${id}`} onCLick={stopPropagation}>
          <span className="see-more">More</span>
        </Link>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
