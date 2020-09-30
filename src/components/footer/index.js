import React from "react";
import {
  Wrapper,
  Content,
  LeftFooter,
  Logo,
  MobileNav,
  TabletNav,
  DesktopNav,
  RightFooter,
  Button,
  Copyright
} from "./footer.css.js";
import { SNS } from "./sns";

export const Footer = () => (
  <Wrapper>
    <Content>
      <LeftFooter>
        <Logo />
        <TabletNav />
        <SNS />
      </LeftFooter>
      <MobileNav />
      <DesktopNav />
      <RightFooter>
        <Button colorScheme="dark">Get an invite</Button>
        <Copyright>Copyright 2020. All Rights Reserved</Copyright>
      </RightFooter>
    </Content>
  </Wrapper>
);
