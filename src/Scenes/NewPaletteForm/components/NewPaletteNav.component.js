import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function NewPaletteNav({
  classes,
  open,
  palettes,
  colorsArray,
  newPaletteName,
  handleDrawerOpen,
  handlePaletteSave,
  handlePaletteNameChange,
}) {
  useEffect(() => {
    ValidatorForm.addValidationRule(
      "isPaletteNameUnique",
      (nuevoPaletteNombre) =>
        palettes.every(
          ({ paletteName }) =>
            paletteName.toLowerCase() !== nuevoPaletteNombre.toLowerCase()
        )
    );
    ValidatorForm.addValidationRule(
      "isPaletteNotEmpty",
      (value) => colorsArray.length && colorsArray.length > 0
    );
    ValidatorForm.addValidationRule("isPaletteNameEmpty", (value) => !!value);
  });

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
        <div>
          <ValidatorForm onSubmit={handlePaletteSave}>
            <TextValidator
              value={newPaletteName}
              onChange={handlePaletteNameChange}
              validators={[
                "required",
                "isPaletteNameUnique",
                "isPaletteNotEmpty",
              ]}
              errorMessages={[
                "Give your palette a name",
                "That name is already in use!",
                "Add some colors to your palette!",
              ]}
            />
            <div className="navBtns">
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
              <Button
                className={classes.backButton}
                variant="contained"
                color="primary"
                type="submit"
              >
                Save Palette
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </AppBar>
    </div>
  );
}

export default NewPaletteNav;
