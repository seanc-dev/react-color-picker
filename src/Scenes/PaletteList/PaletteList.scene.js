import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import MiniPalette from "./components/MiniPalette.component";

import ls from "../../services/localStorageHelpers.service";

import styles from "./PaletteList.styles";

function PaletteList({ palettes, setPalettes, classes, history }) {
  const handlePaletteClick = (e) => {
    history.push(`/palette/${e.currentTarget.dataset.id}`);
  };
  const deletePalette = (id) => {
    const filteredPalettes = palettes.filter((palette) => palette.id !== id);
    setPalettes(filteredPalettes);
    ls.syncLocalStorage(filteredPalettes);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palette Builder</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          <Grid container spacing={3}>
            {palettes.map((palette) => (
              <Grid item xs={12} md={4}>
                <MiniPalette
                  {...palette}
                  deletePalette={deletePalette}
                  handleClick={handlePaletteClick}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(PaletteList);
