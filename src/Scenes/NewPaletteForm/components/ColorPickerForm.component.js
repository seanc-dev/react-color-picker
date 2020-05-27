import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  picker: {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColorBtn: {
    width: "100%",
    padding: "1rem",
    fontSize: "1.25rem",
    marginTop: "1rem",
  },
  colorNameInput: {
    width: "100%",
    marginTop: "1rem",
  },
}));

function ColorPickerForm({
  pickedColor,
  setPickedColor,
  colorsArray,
  setColorsArray,
  paletteFull,
}) {
  const classes = useStyles();

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
        className={classes.picker}
        onChangeComplete={(newColor) => setPickedColor(newColor.hex)}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          className={classes.colorNameInput}
          // variant="filled"
          placeholder="Enter a name for your color"
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
          className={classes.addColorBtn}
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
