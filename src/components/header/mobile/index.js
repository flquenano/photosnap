import React from "react";
import { Wrapper, List, Item } from "./mobile.css.js";

export const Mobile = ({ style, navOpen }) => (
  <Wrapper style={style}>
    <List>
      <Item>Stories</Item>
      <Item>Features</Item>
      <Item>Pricing</Item>
      <Item>Get an Invite</Item>
    </List>
  </Wrapper>
);
