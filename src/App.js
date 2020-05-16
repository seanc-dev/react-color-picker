import React from "react";

import Palette from "./Scenes/Palette/Palette.scene";
import PaletteList from "./Scenes/PaletteList/PaletteList.scene";

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
  const palettes = () => <PaletteList palettes={seedColors} />;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={palettes} />
        <Route
          exact
          path="/palette/:paletteId"
          render={generatePaletteComponent}
        />
      </Switch>
    </div>
  );
}

export default App;
