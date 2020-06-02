import React, { useState } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
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

import styles from "./NewPaletteForm.styles";

function NewPaletteForm({ savePalettes, palettes, classes }) {
  const [open, setOpen] = useState(true);
  const [pickedColor, setPickedColor] = useState("#303F9F");
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
        savePalettes={savePalettes}
        palettes={palettes}
        open={open}
        colorsArray={colorsArray}
        handleDrawerOpen={handleDrawerOpen}
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
          drawerOpen={open}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default withStyles(styles)(NewPaletteForm);
