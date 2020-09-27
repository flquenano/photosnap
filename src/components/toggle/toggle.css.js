import styled from "styled-components";
import { Heading } from "../heading";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6.4rem 0 4rem;
  @media ${({ theme }) => theme.breakpoints.xs} {
    margin: 11.2rem 0 4rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 12rem 0 4.8rem;
  }
`;

export const ToggleWrapper = styled.label`
  position: relative;
  width: 6.4rem;
  height: 3.2rem;
  margin: 0 3.2rem;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.toggle ? "#000000" : "#DFDFDF")};
  border-radius: 50px;
  transition: 250ms;
  &:before {
    position: absolute;
    content: "";
    height: 2.4rem;
    width: 2.4rem;
    top: 4px;
    left: ${(props) => (props.toggle ? "34px" : "6px")};
    border-radius: 100%;
    background-color: ${(props) => (props.toggle ? "#FFFFFF" : "#000000")};
    transition: 250ms;
  }
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  display: none;
`;

export const Monthly = styled(Heading)`
  opacity: ${(props) => (props.toggle ? 0.5 : 1)};
  transition: 250ms;
`;

export const Yearly = styled(Heading)`
  opacity: ${(props) => (props.toggle ? 1 : 0.5)};
  transition: 250ms;
`;
