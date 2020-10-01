import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useSpring } from "react-spring";

import {
  Wrapper,
  Nav,
  List,
  Item,
  MobileNav,
  Button,
  Overlay,
  Filler
} from "./header.css.js";
import { Mobile } from "./mobile";
import Logo from "../../static/logo.svg";
import Burger from "./menu.svg";
import Close from "./close.svg";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (!mediaQuery.matches) {
      setNavOpen(false);
    }
  };

  const navAnimation = useSpring({
    transform: navOpen ? `translateY(0)` : `translateY(-120%)`,
    opacity: navOpen ? 1 : 0
  });
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      {navOpen ? <Filler /> : null}
      <Wrapper nav={navOpen}>
        <Nav>
          <Link to="/">
            <Logo />
          </Link>
          <List>
            <Item>
              <Link to="/stories">Stories </Link>
            </Item>
            <Item>
              <Link to="/features">Features </Link>
            </Item>
            <Item>
              <Link to="/pricing">Pricing </Link>
            </Item>
          </List>
          <Button>Get an invite</Button>
          <MobileNav>
            {navOpen ? (
              <Close onClick={toggleNav} />
            ) : (
              <Burger onClick={toggleNav} />
            )}
          </MobileNav>
        </Nav>
        <Mobile style={navAnimation} navOpen={navOpen} />
        {navOpen ? <Overlay /> : null}
      </Wrapper>
    </>
  );
};
