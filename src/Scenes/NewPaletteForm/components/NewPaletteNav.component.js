import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm } from "react-material-ui-form-validator";

import PaletteSaveFormDialog from "./PaletteSaveFormDialog.component";

function NewPaletteNav({
  classes,
  open,
  palettes,
  setPalettes,
  colorsArray,
  handleDrawerOpen,
}) {
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
          <PaletteSaveFormDialog
            palettes={palettes}
            setPalettes={setPalettes}
            colorsArray={colorsArray}
          />
        </div>
      </AppBar>
    </div>
  );
}

export default NewPaletteNav;
