import { makeStyles } from "@material-ui/styles";

import { sizes } from "../../config";

export default makeStyles((theme) => ({
  singleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a": {
      color: "lightgray",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
      "&:hover": {
        color: "white",
        background: "rgba(255,255,255,0.4)",
      },
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.fullPalette ? "12.5%" : "20%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "12.5% !important",
    },
  },
}));
