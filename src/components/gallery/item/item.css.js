import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";
import { Heading as DefaultHeading } from "../../heading";
import ArrowSvg from "./arrow.svg";

const animateX = keyframes` 
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
`;

export const Wrapper = styled.div`
  position: relative;
  height: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 250ms;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 50rem;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-3rem);
    &::before {
      content: "";
      position: absolute;
      height: 0.6rem;
      width: 100%;
      bottom: -0.6rem;
      background-image: linear-gradient(15deg, #ffc694, #bc7198, #5776ff);
      background-size: 300% 100%;
      animation: ${animateX} 5s ease infinite;
    }
  }
`;

export const Content = styled.div`
  bottom: 0;
  position: absolute;
  text-align: start;
  width: 80%;
`;

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`;

export const HeadingSM = styled(DefaultHeading)`
  margin-bottom: 0.4rem;
`;

export const HeadingXS = styled(DefaultHeading)`
  &:first-of-type {
    margin-bottom: 0.4rem;
  }
  &:last-of-type {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    margin-bottom: 2rem;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const ButtonHeading = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.secondary.white};
`;

export const Arrow = styled(ArrowSvg)`
  transition: all 250ms ease-out;
  path {
    stroke: ${(props) => props.theme.colors.secondary.white};
  }
`;
