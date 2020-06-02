export const drawerWidth = 350;

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
