import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../GlobalStyle.js";
import { theme } from "../Theme.js";
import { Header } from "../header";
import { Footer } from "../footer";
import { Container, Main } from "./layout.css.js";

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </ThemeProvider>
);
