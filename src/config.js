const width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);

const sizeVars = {
  xxs: "314px",
  xs: "575.98px",
  sm: "767.98px",
  md: "991.98px",
  lg: "1199.98px",
  xl: "1600px",
};

const muiSizes = {
  xxs: "350px",
  xs: "420px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

export const sizes = {
  down: (size, mui) =>
    !mui
      ? `@media (max-width: ${sizeVars[size]})`
      : `@media (max-width: ${muiSizes[size]})`,
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
