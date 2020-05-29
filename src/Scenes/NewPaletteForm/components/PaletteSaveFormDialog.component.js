import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";

import "emoji-mart/css/emoji-mart.css";

function PaletteSaveFormDialog({
  palettes,
  setPalettes,
  colorsArray,
  dialogStage,
  setDialogStage,
  history,
}) {
  const [newPaletteName, setNewPaletteName] = useState("");

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

  const handlePaletteNameChange = (evt) => setNewPaletteName(evt.target.value);

  const handleClose = () => {
    setDialogStage("closed");
  };

  const handleNameSave = () => {
    setDialogStage("emoji");
  };

  const handleEmojiSelect = (emoji) => {
    setPalettes([
      ...palettes,
      {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, "-"),
        colors: colorsArray,
        emoji: emoji.native,
      },
    ]);
    history.push("/");
  };

  return (
    <div>
      <Dialog
        open={dialogStage === "emoji"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="emoji-dialog-title">
          Choose a Palette Emoji
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Picker title="Gotta Pick Em All!" onSelect={handleEmojiSelect} />
        </DialogContent>
      </Dialog>
      <Dialog
        open={dialogStage === "name"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handleNameSave}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>
            <TextValidator
              // className={classes.paletteNameInput}
              value={newPaletteName}
              fullWidth
              margin="normal"
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
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default withRouter(PaletteSaveFormDialog);
