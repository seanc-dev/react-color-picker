import { makeStyles } from "@material-ui/styles";

import { sizes } from "../../../config";

export default makeStyles((theme) => ({
  DraggableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    [sizes.down("lg")]: {
      width: (props) => props.drawerOpen && "25%",
      height: (props) => props.drawerOpen && "20%",
    },
    [sizes.down("md")]: {
      width: (props) => (props.drawerOpen ? "50%" : "25%"),
      height: (props) => (props.drawerOpen ? "10%" : "20%"),
    },
    [sizes.down("sm")]: {
      width: (props) => (props.drawerOpen ? "100%" : "50%"),
      height: "10%",
    },
    [sizes.down("xs")]: {
      width: "100%",
    },
    "&:hover svg": {
      transform: "scale(1)",
      transition: "transform 0.1s ease-in",
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
    lineHeight: "24px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    color: "rgba(0,0,0,0.7)",
    transform: "scale(0.8)",
    transition: "color 0.1s ease-out",
    "&:hover": {
      color: "white",
      transform: "scale(1.1)",
      transition: "all 0.1s ease-in",
    },
  },
}));
