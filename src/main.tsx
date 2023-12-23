import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import Router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
);
