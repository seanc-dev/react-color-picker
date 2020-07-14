import React, { useState } from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

import useStyles from "./DraggableColorBox.styles";

function DraggableColorBox(props) {
  const { backgroundColor, name, removeColor } = props;
  const classes = useStyles(props);

  const [deleteHover, setDeleteHover] = useState(false);

  const handleDeleteMouseEnter = () => setDeleteHover(true);
  const handleDeleteMouseLeave = () => setDeleteHover(false);

  const handleDelete = () => {
    debugger;
    removeColor(backgroundColor);
  };
  return (
    <div className={classes.DraggableColorBox} style={{ backgroundColor }}>
      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        {deleteHover ? (
          <DeleteForeverOutlinedIcon
            className={classes.deleteIcon}
            onClick={handleDelete}
            onMouseLeave={handleDeleteMouseLeave}
          />
        ) : (
          <DeleteIcon
            className={classes.deleteIcon}
            onMouseEnter={handleDeleteMouseEnter}
          />
        )}
      </div>
    </div>
  );
}

export default SortableElement(DraggableColorBox);
