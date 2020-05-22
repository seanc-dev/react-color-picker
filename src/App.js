import React from "react";

import Palette from "./Scenes/Palette/Palette.scene";
import PaletteList from "./Scenes/PaletteList/PaletteList.scene";
import NewPaletteForm from "./Scenes/NewPaletteForm/NewPaletteForm.scene";

import { generatePalette } from "./service/colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router";
import SingleColorPalette from "./Scenes/SingleColorPalette/SingleColorPalette.scene";

function App() {
  const findPalette = (id) => seedColors.find((palette) => palette.id === id);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList {...routeProps} palettes={seedColors} />
          )}
        />
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/palette/:paletteId"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
              {...routeProps}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
