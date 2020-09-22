import styled from "styled-components";
import ArrowSvg from "./arrow.svg";

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  width: 168px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  &:hover {
    cursor: pointer;
    .arrow-svg {
      transform: translateX(10px);
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
