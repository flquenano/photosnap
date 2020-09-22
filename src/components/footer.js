import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// import Img from "gatsby-image";

const Footer = styled.footer`
  background: #000000;
  width: 100%;
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <div>
          {/* <Img /> */}
          <div>SNS</div>
          <ul className="footer__nav--small">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/stories">
              <li>Stories</li>
            </Link>
            <Link to="/features">
              <li>Features</li>
            </Link>
            <Link to="/pricing">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="footer__nav--desktop">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/stories">
              <li>Stories</li>
            </Link>
            <Link to="/features">
              <li>Features</li>
            </Link>
            <Link to="/pricing">
              <li>Pricing</li>
            </Link>
          </ul>
        </div>
        <div>
          <span>Get an Invite →</span>
        </div>
      </Wrapper>
    </Footer>
  );
};

export default FooterComponent;
