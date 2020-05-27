import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { arrayMove } from "react-sortable-hoc";

import NewPaletteNav from "./components/NewPaletteNav.component";
import ColorPickerForm from "./components/ColorPickerForm.component";
import DraggableColorList from "./components/DraggableColorList.component";

import config from "../../config";

const drawerWidth = config.drawerWidth;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "64px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  backButton: {
    "& a": {
      textDecoration: "none",
    },
  },
  drawerContainer: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  drawerButtons: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  inlineButton: {
    width: "47.5%",
  },
}));

function NewPaletteForm({ setPalettes, palettes, history }) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [pickedColor, setPickedColor] = useState("#303F9F");
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

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

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
      <NewPaletteNav
        classes={classes}
        open={open}
        palettes={palettes}
        colorsArray={colorsArray}
        newPaletteName={newPaletteName}
        handleDrawerOpen={handleDrawerOpen}
        handlePaletteSave={handlePaletteSave}
        handlePaletteNameChange={handlePaletteNameChange}
      />
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
        <div className={classes.drawerContainer}>
          <Typography variant="h5">Design Your Palette</Typography>
          <div className={classes.drawerButtons}>
            <Button
              className={classes.inlineButton}
              variant="contained"
              color="secondary"
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.inlineButton}
              variant="contained"
              color="primary"
              onClick={setRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            pickedColor={pickedColor}
            setPickedColor={setPickedColor}
            colorsArray={colorsArray}
            setColorsArray={setColorsArray}
            paletteFull={paletteFull}
            classes={classes}
          />
        </div>
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
