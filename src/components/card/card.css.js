import styled from "styled-components";
import {
  GradientHorizontal,
  GradientVertical
} from "../animations/keyframes.js";
import { Text as DefaultText } from "../text";
import { Heading } from "../heading";
import { Button as DefaultButton } from "../button";

export const Wrapper = styled.div`
  position: relative;
  width: clamp(31rem, 90%, 35rem);
  background: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.black
      : "#F5F5F5"};
  height: ${(props) => (props.colorScheme === "dark" ? "470px" : "407px")};
  padding: 4.8rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  @media (min-width: 540px) and (max-width: 1280px) {
    flex-wrap: wrap;
    height: 27rem;
    width: clamp(54rem, 90%, 76.8rem);
    padding: 4rem;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0 ${(props) => (props.colorScheme === "dark" ? "3rem" : "0")};
    padding: ${(props) =>
      props.colorScheme === "dark" ? "8.8rem 4rem 7.1rem" : "5.6rem 4rem 4rem"};
  }

  &::before {
    display: ${(props) => (props.colorScheme === "light" ? "none" : "block")};
    content: "";
    position: absolute;
    height: 0.6rem;
    width: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(15deg, #ffc694, #bc7198, #5776ff);
    background-size: 300% 100%;
    animation: ${GradientHorizontal} 5s ease infinite;
    @media (min-width: 540px) and (max-width: 1280px) {
      height: 100%;
      width: 0.6rem;
      background-size: 100% 300%;
      animation: ${GradientVertical} 5s ease infinite;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 45%;
    align-items: flex-start;
    text-align: start;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Option = styled(Heading)`
  margin-bottom: 1.8rem;
`;

export const PriceWrapper = styled.div`
  margin-bottom: 4rem;
  @media ${(props) => props.theme.breakpoints.xs} {
  }
`;

export const PortraitPriceWrapper = styled(PriceWrapper)`
  display: block;
  @media (min-width: 540px) and (max-width: 1280px) {
    display: none;
  }
`;

export const LandscapePriceWrapper = styled(PriceWrapper)`
  display: none;
  @media (min-width: 540px) and (max-width: 1280px) {
    display: block;
  }
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
  transition: all 250ms;
  background-color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  padding: 1.2rem 0;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.black
      : props.theme.colors.secondary.white};
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.xs} {
    order: 1;
  }
  &:hover {
    background: ${(props) => props.theme.colors.secondary.grey};
    color: ${(props) => props.theme.colors.secondary.black};
    span {
      border-bottom: none;
    }
  }
`;
