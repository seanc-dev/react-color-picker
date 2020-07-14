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

const sizeVarsNumeric = {
  xxs: 314,
  xs: 575.98,
  sm: 767.98,
  md: 991.98,
  lg: 1199.98,
  xl: 1600,
};

const muiSizes = {
  xxs: "350px",
  xs: "420px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};

let dw;
if (width > sizeVarsNumeric.md) {
  dw = 350;
} else if (width > sizeVarsNumeric.sm) {
  dw = 300;
} else if (width > sizeVarsNumeric.xs) {
  dw = 250;
} else {
  dw = width;
}

export const drawerWidth = dw;

export const sizes = {
  down: (size, mui) =>
    !mui
      ? `@media (max-width: ${sizeVars[size]})`
      : `@media (max-width: ${muiSizes[size]})`,
};
