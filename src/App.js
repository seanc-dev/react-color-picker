import React from "react";

import Palette from "./Scenes/Palette/Palette.scene";

import { generatePalette } from "./service/colorHelpers";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router";

function App() {
  const palette = generatePalette(seedColors[4]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List</h1>} />
        <Route
          exact
          path="/palette/:paletteId"
          render={() => <h1>Individual Palette</h1>}
        />
      </Switch>
      {/* <Palette {...palette} /> */}
    </div>
  );
}

export default App;
