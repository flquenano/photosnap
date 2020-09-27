import React from "react";
import { Link } from "gatsby";
import { Wrapper, Item } from "./nav.css.js";

export const Nav = ({ className }) => (
  <Wrapper className={className}>
    <Item>
      <Link to="/">Home</Link>
    </Item>
    <Item>
      <Link to="/stories">Stories</Link>
    </Item>
    <Item>
      <Link to="/features">Features</Link>
    </Item>
    <Item>
      <Link to="/pricing">Pricing</Link>
    </Item>
  </Wrapper>
);
