import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  paletteFooter: {
    backgroundColor: (forPalette) => (forPalette ? "white" : "transparent"),
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  emoji: {
    fontSize: "1rem",
    margin: "auto 1rem",
  },
});
