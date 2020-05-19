import React from "react";

import Palette from "./Scenes/Palette/Palette.scene";
import PaletteList from "./Scenes/PaletteList/PaletteList.scene";
import SingleColorPalette from "./Scenes/SingleColorPalette/SingleColorPalette.scene";

import { generatePalette } from "./service/colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router";

function App() {
  const generatePaletteComponent = (routeProps) => {
    const palette = generatePalette(
      findPalette(routeProps.match.params.paletteId)
    );
    return <Palette {...palette} />;
  };
  const findPalette = (id) => seedColors.find((palette) => palette.id === id);
  const palettes = (routeProps) => (
    <PaletteList {...routeProps} palettes={seedColors} />
  );
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={palettes} />
        <Route
          exact
          path="/palette/:paletteId"
          render={generatePaletteComponent}
        />
        <Route
          exact
          path="/palette/:palette:id/:colorId"
          render={() => <SingleColorPalette />}
        />
      </Switch>
    </div>
  );
}

export default App;
