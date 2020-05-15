import React from "react";

import Palette from "./Scenes/Palette/Palette.scene";

import { generatePalette } from "./service/colorHelpers";
import seedColors from "./seedColors";

function App() {
  const palette = generatePalette(seedColors[4]);
  return (
    <div className="App">
      <Palette palette={palette} />
    </div>
  );
}

export default App;
