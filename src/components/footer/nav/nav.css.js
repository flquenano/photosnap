import styled from "styled-components";

export const Wrapper = styled.ul`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
`;
export const Item = styled.li`
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    opacity: 0.3;
  }
  &:not(:last-child) {
    margin-bottom: 1.9rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    &:not(:last-child) {
      margin-right: 2.6rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    &:not(:last-child) {
      margin-bottom: 1.9rem;
    }
  }
`;
