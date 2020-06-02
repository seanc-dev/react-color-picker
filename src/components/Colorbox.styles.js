import { makeStyles } from "@material-ui/styles";
import chroma from "chroma-js";

import { sizes } from "../config";

export default makeStyles((theme) => ({
  colorBox: {
    width: "20%",
    height: (props) => (props.fullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
      transition: "opacity 0.3s ease-in",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.fullPalette ? "12.5%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => `${props.fullPalette ? "6.75" : "12.5%"} !important`,
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
  },
  copyOverlay: {
    opacity: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.35)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0,0,0,0.5)"
        : "lightgray",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5
        ? "rgba(0,0,0,0.5)"
        : "lightgray",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    border: "none",
    textTransform: "uppercase",
    textDecoration: "none",
    opacity: 0,
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("md")]: {
        fontSize: "7rem",
      },
      [sizes.down("xs")]: {
        fontSize: "5rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08
        ? "lightgray"
        : "rgba(0,0,0,0.7)",
  },
  moreButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.5)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    height: "30px",
    width: "60px",
    textAlign: "center",
    lineHeight: "30px",
  },
}));
