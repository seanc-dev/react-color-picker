import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import { withStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import styles from "./Navbar.styles";

import "rc-slider/assets/index.css";

function Navbar({ level, setLevel, format, setFormat, showSlider, classes }) {
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };
  const closeSnackbar = () => setOpen(false);
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">ColourPaletteBuilder</Link>
      </div>
      {showSlider && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={setLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
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

export default withStyles(styles)(Navbar);
