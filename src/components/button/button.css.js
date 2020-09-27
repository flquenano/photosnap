import styled from "styled-components";
import ArrowSvg from "./arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  &:hover {
    cursor: pointer;
    .arrow-svg {
      transform: translateX(1rem);
    }
  }
`;

export const Arrow = styled(ArrowSvg)`
  transition: all 250ms ease-out;
  path {
    stroke: ${(props) =>
      props.color === "dark"
        ? props.theme.colors.secondary.white
        : props.theme.colors.secondary.black};
  }
`;
