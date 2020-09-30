import styled from "styled-components";

export const Wrapper = styled.div`
  position: ${(props) => (props.nav ? "fixed" : "relative")};
  z-index: 999;
  width: 100%;
  height: 7.2rem;
  padding: 0 6.4%;
  background: ${(props) => props.theme.colors.secondary.white};
  display: flex;
  justify-content: center;
  transition: position 250ms;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 11.45%;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileNav = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const List = styled.ul`
  display: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 700;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const Item = styled.li`
  display: inline;
  cursor: pointer;
  transition: all 250ms;
  &:not(:last-child) {
    margin-right: 3.7rem;
  }
  &:hover {
    opacity: 0.3;
  }
`;

export const Button = styled.button`
  display: none;
  color: ${(props) => props.theme.colors.secondary.white};
  background: ${(props) => props.theme.colors.secondary.black};
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 1.2rem;
  width: 15.8rem;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    color: ${(props) => props.theme.colors.secondary.black};
    background: ${(props) => props.theme.colors.secondary.grey};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;
