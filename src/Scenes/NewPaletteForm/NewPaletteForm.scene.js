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
import { arrayMove } from "react-sortable-hoc";

import DraggableColorList from "./components/DraggableColorList.component";

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
    { color: "#0020F5", name: "Royal Blue" },
    { color: "#00A421", name: "New Growth Green" },
    { color: "#C51602", name: "Sang Real" },
    { color: "#029DC5", name: "Sea Yan" },
    { color: "#3E02BD", name: "Deep Purple" },
  ]);

  const paletteFull = colorsArray.length >= 20;

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

  const removeColor = (colorToRemove) => {
    setColorsArray(colorsArray.filter(({ color }) => color !== colorToRemove));
  };

  const clearColors = () => setColorsArray([]);

  const setRandomColor = () =>
    setPickedColor(
      "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
    );

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setColorsArray(arrayMove(colorsArray, oldIndex, newIndex));

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
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button variant="contained" color="primary" onClick={setRandomColor}>
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={pickedColor ? pickedColor : "#303F9F"}
          onChangeComplete={(newColor) => setPickedColor(newColor.hex)}
        />
        <ValidatorForm onSubmit={handleAddColor}>
          <TextValidator
            disabled={paletteFull}
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
            {!paletteFull ? "Add Color" : "Palette Full"}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colorsArray={colorsArray}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default NewPaletteForm;
