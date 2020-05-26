import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
// import chroma from "chroma-js";

const styles = {
  DraggableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.1)",
      transition: "all 0.1s ease-in",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  colorName: {
    // color: (props) =>
    //   chroma(props.background).luminance() <= 0.08
    //     ? "lightgray"
    //     : "rgba(0,0,0,0.7)",
  },
  deleteIcon: {
    color: "rgba(0,0,0,0.7)",
    transform: "scale(0.8)",
    transition: "color 0.1s ease-out",
  },
};

function DraggableColorBox({ backgroundColor, name, classes, removeColor }) {
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

export default withStyles(styles)(DraggableColorBox);
