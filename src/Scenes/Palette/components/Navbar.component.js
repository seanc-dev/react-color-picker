import React, { useState } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import "rc-slider/assets/index.css";
import "./Navbar.component.css";

function Navbar({ level, setLevel, format, setFormat }) {
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  const closeSnackbar = () => setOpen(false);
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/">ColourPaletteBuilder</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={setLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="snackbar">Format changed to {format.toUpperCase()}!</span>
        }
        ContentProps={{
          "aria-describedby": "snackbar",
        }}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
}

export default Navbar;
