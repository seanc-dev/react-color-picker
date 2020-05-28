import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  paletteNameInput: {
    width: "100%",
  },
}));

function PaletteSaveFormDialog({
  palettes,
  setPalettes,
  colorsArray,
  history,
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitClose = () => {
    ValidatorForm.isFormValid().then((resolve) => {
      if (resolve) setOpen(false);
    });
  };

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
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={handlePaletteSave}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>
            <TextValidator
              className={classes.paletteNameInput}
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
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmitClose}
            >
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default withRouter(PaletteSaveFormDialog);
