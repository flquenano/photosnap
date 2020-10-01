import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";
import { Text as DefaultText } from "../text";

const animateX = keyframes` 
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
`;
const animateY = keyframes` 
  0% {background-position:50% 0%}
  50% {background-position:0% 100%}
  100% {background-position:50% 0%}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    display: flex;
    height: ${(props) => props.height};
    flex-flow: ${(props) =>
      props.reverse ? "row nowrap" : "row-reverse nowrap"};
  }
`;

export const Image = styled(Img)`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 35%;
    height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 57%;
  }
`;

export const Content = styled.div`
  background: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.black
      : props.theme.colors.secondary.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 65%;
    height: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 44%;
  }
`;

export const BodyGradient = styled.div`
  position: relative;
  &::before {
    display: ${(props) => (props.noGradient ? "none" : "block")};
    content: "";
    position: absolute;
    height: 0.6rem;
    width: 12.8rem;
    top: 0;
    left: 0;
    background-image: linear-gradient(15deg, #ffc694, #bc7198, #5776ff);
    background-size: 300% 100%;
    animation: ${animateX} 5s ease infinite;
    @media ${(props) => props.theme.breakpoints.xs} {
      height: 100%;
      width: 0.6rem;
      background-size: 100% 300%;
      animation: ${animateY} 5s ease infinite;
    }
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    margin: 17.3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Body = styled.div`
  position: relative;
  width: 31.8rem;
  padding: 7.2rem 0;
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0;
    width: 80%;
    max-width: 38.7rem;
  }
`;

export const Text = styled(DefaultText)`
  margin-bottom: ${(props) => (props.isBtn ? "23px" : "0px")};
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: ${(props) => (props.isBtn ? "48px" : "0px")};
  }
`;
