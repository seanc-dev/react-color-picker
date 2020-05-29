import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import PaletteSaveFormDialog from "./PaletteSaveFormDialog.component";

import useStyles from "./NewPaletteNav.styles";

function NewPaletteNav({
  open,
  savePalettes,
  palettes,
  colorsArray,
  handleDrawerOpen,
}) {
  const classes = useStyles();

  const [dialogStage, setDialogStage] = useState("closed");

  const handleDialogOpen = () => setDialogStage("name");

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.toolbarHeader}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </div>
        </Toolbar>
        <div className={classes.navBtns}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}
          >
            Save
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
      {dialogStage !== "closed" ? (
        <PaletteSaveFormDialog
          savePalettes={savePalettes}
          palettes={palettes}
          colorsArray={colorsArray}
          dialogStage={dialogStage}
          setDialogStage={setDialogStage}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default NewPaletteNav;
