import styled from "styled-components";
import { Nav } from "./nav";
import LogoDefault from "../../static/logo.svg";
import { Button as ButtonDefault } from "../button";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.secondary.white};
  background: ${(props) => props.theme.colors.secondary.black};
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 284px;
  }
`;

export const Content = styled.div`
  padding: 5.6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 100%;
    padding: 6.4rem 5.2%;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const LeftFooter = styled.div``;

export const Logo = styled(LogoDefault)`
  margin-bottom: 3.2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 7.5rem;
  }
  g path:first-child {
    fill: ${(props) => props.theme.colors.secondary.white};
  }
`;

export const MobileNav = styled(Nav)`
  margin: 4.9rem 0 11.9rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const TabletNav = styled(Nav)`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-bottom: 7.2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
export const DesktopNav = styled(Nav)`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    width: 100%;
    text-align: left;
    margin-left: 12.5rem;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    align-items: flex-end;
  }
`;

export const Button = styled(ButtonDefault)`
  width: 17.2rem;
  margin-bottom: 3.4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 12rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 7rem;
  }
`;
export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.secondary.white};
  opacity: 0.525;
  font-size: 1.5rem;
  white-space: nowrap;
`;
