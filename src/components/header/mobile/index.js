import React from "react";
import { Link } from "gatsby";
import { Wrapper, List, Item } from "./mobile.css.js";

export const Mobile = ({ style, navOpen }) => (
  <Wrapper style={style}>
    <List>
      <Item>
        <Link to="/stories">Stories</Link>
      </Item>
      <Item>
        <Link to="/features">Features</Link>
      </Item>
      <Item>
        <Link to="/pricing">Pricing</Link>
      </Item>
      <Item>
        <Link to="/">Get an Invite</Link>
      </Item>
    </List>
  </Wrapper>
);
