import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import MiniPalette from "./components/MiniPalette.component";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
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
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
  },
};

function PaletteList({ palettes, classes }) {
  console.log(palettes);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palette Builder</h1>
        </nav>
        <div className={classes.palettes}>
          <Grid container spacing={2}>
            {palettes.map((palette) => (
              <Grid item xs={12} md={4}>
                <Link to={`/palette/${palette.id}`} key={palette.id}>
                  <MiniPalette {...palette} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
