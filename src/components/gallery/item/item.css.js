import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";
import Heading from "../../heading";
import ArrowSvg from "./arrow.svg";

const animateX = keyframes` 
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
`;

export const Wrapper = styled.div`
  position: relative;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 250ms;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 500px;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-30px);
    &::before {
      content: "";
      position: absolute;
      height: 6px;
      width: 100%;
      bottom: -6px;
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

export const HeadingSM = styled(Heading)`
  font-weight: 700;
  margin-bottom: 4px;
`;

export const HeadingXS = styled(Heading)`
  font-weight: 400;
  &:first-of-type {
    margin-bottom: 4px;
  }
  &:last-of-type {
    padding-bottom: 1.06rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    margin-bottom: 1.33rem;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.67rem;
`;

export const ButtonHeading = styled.h1`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.secondary.white};
`;

export const Arrow = styled(ArrowSvg)`
  transition: all 250ms ease-out;
  path {
    stroke: ${(props) => props.theme.colors.secondary.white};
  }
`;
