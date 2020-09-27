import styled from "styled-components";
import { animated } from "react-spring";
import { GradientHorizontal } from "../animations/keyframes.js";
import { Text as DefaultText } from "../text";
import { Heading } from "../heading";
import { Button as DefaultButton } from "../button";

export const Wrapper = styled(animated.div)`
  position: relative;
  width: 35rem;
  background: ${({ color, theme }) =>
    color === "dark" ? theme.colors.secondary.black : "#F5F5F5"};
  height: ${({ color }) => (color === "dark" ? "470px" : "407px")};
  padding: ${({ color }) =>
    color === "dark" ? "8.8rem 4rem 7.1rem" : "5.6rem 4rem 4rem"};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 ${(props) => (props.color === "dark" ? "3rem" : "0")};
  &::before {
    display: ${(props) => (props.color === "light" ? "none" : "block")};
    content: "";
    position: absolute;
    height: 0.6rem;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(15deg, #ffc694, #bc7198, #5776ff);
    background-size: 300% 100%;
    animation: ${GradientHorizontal} 5s ease infinite;
  }
`;

export const Option = styled(Heading)`
  margin-bottom: 1.8rem;
`;

export const PriceWrapper = styled.div`
  margin-bottom: 4rem;
`;
export const Price = styled(Heading)`
  margin-bottom: 0;
`;
export const SubText = styled(DefaultText)``;

export const Text = styled(DefaultText)`
  margin-bottom: 4rem;
`;

export const Button = styled(DefaultButton)`
  width: 100%;
  background-color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  padding: 1.2rem 0;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.black
      : props.theme.colors.secondary.white};
  justify-content: center;
`;
