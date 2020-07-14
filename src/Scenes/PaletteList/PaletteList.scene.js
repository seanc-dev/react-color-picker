import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import MiniPalette from "./components/MiniPalette.component";

import ls from "../../services/localStorageHelpers.service";

import useStyles from "./PaletteList.styles";

function PaletteList(props) {
  const { palettes, setPalettes, history } = props;
  const classes = useStyles(props);
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
          <h1>ColorPaletteBuilder</h1>
          <Link to="/palette/new" style={{ textDecoration: "none" }}>
            <Button
              classes={{ root: classes.createButton }}
              variant="contained"
              disableElevation
            >
              Create Palette
            </Button>
          </Link>
        </nav>
        <div className={classes.palettes}>
          <Grid container spacing={3}>
            {palettes.map((palette) => (
              <Grid item xs={12} sm={6} md={4}>
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

export default PaletteList;
