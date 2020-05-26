import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import DraggableColorBox from "./DraggableColorBox.component";

function DraggableColorList({ colorsArray, removeColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colorsArray.map((color, idx) => (
        <DraggableColorBox
          index={idx}
          key={color.color}
          backgroundColor={color.color}
          name={color.name}
          removeColor={removeColor}
        />
      ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
