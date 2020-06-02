import { makeStyles } from "@material-ui/styles";
import { drawerWidth, sizes } from "../../../config";

const h = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);

export default makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "64px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navBtns: {
    marginRight: "1rem",
    [sizes.down("sm")]: {
      // display: (props) => (props.open ? "none" : "block"),
      opacity: (props) => (props.open ? 0 : 1),
      transition: theme.transitions.create(["opacity"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    [sizes.down("xs")]: {
      position: "absolute",
      margin: "auto",
      left: "50%",
      transform: `translate(-50%, ${h - 70}px)`,
    },
  },
  buttons: {
    margin: "0 0.25rem",
  },
  toolbarHeader: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));
