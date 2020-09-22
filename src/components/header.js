import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../static/logo.svg";
// import Text from "./text/text.js";

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Nav = styled.nav`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Ul = styled.ul`
  display: flex;
  text-transform: uppercase;
  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
  li {
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">
          <Logo />
        </Link>
        <Ul>
          <Link to="/stories">
            <li>Stories</li>
          </Link>
          <Link to="/features">
            <li>Features</li>
          </Link>
          <Link to="/pricing">
            <li>Pricing</li>
          </Link>
        </Ul>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
