import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./DraggableColorBox.styles";

function DraggableColorBox({ backgroundColor, name, removeColor }) {
  const classes = useStyles();
  const handleDelete = () => removeColor(backgroundColor);
  return (
    <div className={classes.DraggableColorBox} style={{ backgroundColor }}>
      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
}

export default SortableElement(DraggableColorBox);
