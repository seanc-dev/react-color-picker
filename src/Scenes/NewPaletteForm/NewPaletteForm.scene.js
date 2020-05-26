import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import DraggableColorBox from "./components/DraggableColorBox.component";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    height: "calc(100vh - 64px)",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbarHeader: {
    display: "flex",
    alignItems: "center",
  },
}));

function NewPaletteForm({ setPalettes, palettes, history }) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [pickedColor, setPickedColor] = useState("#303F9F");
  const [newColorName, setNewColorName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");
  const [colorsArray, setColorsArray] = useState([
    { color: "#C38315", name: "Lush Gold" },
  ]);

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colorsArray.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colorsArray.every(({ color }) => color !== pickedColor)
    );
    ValidatorForm.addValidationRule("isPaletteNameUnique", (newPaletteName) =>
      palettes.every(
        ({ paletteName }) =>
          paletteName.toLowerCase() !== newPaletteName.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule(
      "isPaletteNotEmpty",
      (value) => colorsArray.length && colorsArray.length > 0
    );
    ValidatorForm.addValidationRule("isPaletteNameEmpty", (value) => !!value);
  });

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  const handleAddColor = () => {
    setColorsArray([
      ...colorsArray,
      { color: pickedColor, name: newColorName },
    ]);
    setNewColorName("");
  };

  const removeColor = (colorToRemove) => {
    setColorsArray(colorsArray.filter(({ color }) => color !== colorToRemove));
  };

  const handleColorNameChange = (evt) => setNewColorName(evt.target.value);
  const handlePaletteNameChange = (evt) => setNewPaletteName(evt.target.value);

  const handlePaletteSave = () => {
    setPalettes([
      ...palettes,
      {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, "-"),
        colors: colorsArray,
      },
    ]);
    history.push("/");
  };

  return (
    <div className={classes.root}>
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
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h5">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={pickedColor ? pickedColor : "#303F9F"}
          onChangeComplete={(newColor) => setPickedColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={handleAddColor}>
          <TextValidator
            value={newColorName}
            onChange={handleColorNameChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a name",
              "This name is already in use",
              "That color is already in your palette",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ backgroundColor: pickedColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {colorsArray.map((color) => (
          <DraggableColorBox
            key={color.color}
            backgroundColor={color.color}
            name={color.name}
            removeColor={removeColor}
          />
        ))}
      </main>
    </div>
  );
}

export default NewPaletteForm;
