import React from "react";

import Palette from "./Scenes/Palette/Palette.scene";

import { generatePalette } from "./service/colorHelpers";
import seedColors from "./seedColors";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
