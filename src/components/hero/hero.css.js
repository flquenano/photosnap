import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";
import $Text from "../text";

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

export const Container = styled.div`
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
    props.color === "dark"
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
    height: 6px;
    width: 128px;
    top: 0;
    left: 0;
    background-image: linear-gradient(15deg, #ffc694, #bc7198, #5776ff);
    background-size: 300% 100%;
    animation: ${animateX} 5s ease infinite;
    @media ${(props) => props.theme.breakpoints.xs} {
      height: 100%;
      width: 6px;
      background-size: 100% 300%;
      animation: ${animateY} 5s ease infinite;
    }
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    margin: 11.53rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Body = styled.div`
  position: relative;
  width: 318px;
  padding: 4.8rem 0;
  @media ${(props) => props.theme.breakpoints.xs} {
    padding: 0;
    width: 80%;
    max-width: 387px;
  }
`;

export const Text = styled($Text)`
  margin-bottom: ${(props) => (props.isBtn ? "16px" : "0px")};
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: ${(props) => (props.isBtn ? "21px" : "0px")};
  }
`;
