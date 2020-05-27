import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function ColorPickerForm({
  pickedColor,
  setPickedColor,
  colorsArray,
  setColorsArray,
  paletteFull,
}) {
  const [newColorName, setNewColorName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colorsArray.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colorsArray.every(({ color }) => color !== pickedColor)
    );
  });

  const handleColorNameChange = (evt) => setNewColorName(evt.target.value);

  const handleSubmit = () => {
    setColorsArray([
      ...colorsArray,
      { color: pickedColor, name: newColorName },
    ]);
    setNewColorName("");
  };

  return (
    <div>
      <ChromePicker
        color={pickedColor ? pickedColor : "#303F9F"}
        onChangeComplete={(newColor) => setPickedColor(newColor.hex)}
      />
      <ValidatorForm onSubmit={handleSubmit}>
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
    </div>
  );
}

export default ColorPickerForm;
