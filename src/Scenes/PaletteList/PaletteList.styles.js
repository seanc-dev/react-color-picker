import { makeStyles } from "@material-ui/styles";

import { sizes } from "../../config";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    [sizes.down("lg", true)]: {
      width: "60%",
    },
    [sizes.down("md", true)]: {
      width: "70%",
    },
    [sizes.down("sm", true)]: {
      width: "50%",
    },
    [sizes.down("xs", true)]: {
      width: "60%",
    },
    [sizes.down("xxs", true)]: {
      width: "70%",
    },
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      color: "inherit",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
  },
}));
