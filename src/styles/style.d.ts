import "styled-components";
import { ColorTypes } from "./theme";

declare module "style-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
  }
}
