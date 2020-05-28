import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import PaletteSaveFormDialog from "./PaletteSaveFormDialog.component";

import config from "../../../config";

const { drawerWidth } = config;

const useStyles = makeStyles((theme) => ({
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
  buttons: {
    margin: "0 0.5rem",
  },
}));

function NewPaletteNav({
  open,
  palettes,
  setPalettes,
  colorsArray,
  handleDrawerOpen,
}) {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(true);

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.toolbarHeader}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
          </div>
        </Toolbar>
        <div className={classes.navBtns}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}
          >
            Save
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Link>
        </div>
      </AppBar>
      {dialogOpen ? (
        <PaletteSaveFormDialog
          palettes={palettes}
          setPalettes={setPalettes}
          colorsArray={colorsArray}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default NewPaletteNav;
