import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle.js";
import { theme } from "./Theme.js";

import Header from "./header2.js";
import Footer from "./footer2.js";

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(375px, 100%, 1920px);
`;

const Main = styled.main`
  width: 100%;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default Layout;
