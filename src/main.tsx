import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import Router from "./Router.tsx";
import Layout from "./components/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Layout>
  </React.StrictMode>,
);
