import seedColors from "../seedColors";

export default {
  savedPalettes: JSON.parse(localStorage.getItem("palettes")) || seedColors,
  syncLocalStorage: (palettes) =>
    localStorage.setItem("palettes", JSON.stringify(palettes)),
};
