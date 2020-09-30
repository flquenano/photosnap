import styled from "styled-components";
import { Arrow as DefaultArrow } from "../arrow";

export const Wrapper = styled.div`
  flex-grow: 0;
  display: flex;
  width: auto;
  justify-content: flex-start;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  &:hover {
    cursor: pointer;
    .arrow-svg {
      transform: translateX(1rem);
    }
    span {
      border-bottom: 1px solid
        ${(props) =>
          props.colorScheme === "dark"
            ? props.theme.colors.secondary.white
            : props.theme.colors.secondary.black};
    }
  }
`;

export const Content = styled.span`
  transition: all 250ms;
  border-bottom: 1px solid
    ${(props) =>
      props.colorScheme === "dark"
        ? props.theme.colors.secondary.black
        : props.theme.colors.secondary.white};
`;

export const Arrow = styled(DefaultArrow)`
  margin-left: 1rem;
  transition: all 250ms ease-out;
  path {
    stroke: ${(props) =>
      props.colorScheme === "dark"
        ? props.theme.colors.secondary.white
        : props.theme.colors.secondary.black};
  }
`;
