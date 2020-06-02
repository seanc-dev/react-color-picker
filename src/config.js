const width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);

const sizeVars = {
  xs: "575.98px",
  sm: "767.98px",
  md: "991.98px",
  lg: "1199.98px",
  xl: "1600px",
};

export const sizes = {
  down: (size) => `@media (max-width: ${sizeVars[size]})`,
};

let dw;
if (width > sizeVars.md) {
  dw = 350;
} else if (width > sizeVars.sm) {
  dw = 300;
} else if (width > sizeVars.xs) {
  dw = 250;
} else {
  dw = width;
}

export const drawerWidth = dw;
