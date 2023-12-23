import { DefaultTheme } from "styled-components";

const colors = {
  white: "#FFFFF",
  black: "#00000",
};

export type ColorTypes = typeof colors;

const theme: DefaultTheme = {
  colors,
};

export default theme;
