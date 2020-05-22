import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  DraggableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
  },
}));

function DraggableColorBox({ backgroundColor }) {
  const classes = useStyles();
  return (
    <div
      className={classes.DraggableColorBox}
      style={{ backgroundColor }}
    ></div>
  );
}

export default DraggableColorBox;
