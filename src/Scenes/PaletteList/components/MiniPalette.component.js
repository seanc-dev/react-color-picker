import React from "react";
import uuid from "uuid/v4";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/DeleteOutlineTwoTone";

import styles from "./MiniPalette.styles";

function MiniPalette(props) {
  const {
    paletteName,
    emoji,
    id,
    colors,
    handleClick,
    deletePalette,
    classes,
  } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      key={uuid()}
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  const handlePaletteDelete = (e) => {
    e.stopPropagation();
    deletePalette(id);
  };
  return (
    <div data-id={id} className={classes.root} onClick={handleClick}>
      <div className={classes.delete} onClick={handlePaletteDelete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
