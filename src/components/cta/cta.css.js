import styled from "styled-components";
import Img from "gatsby-image";

import Heading from "../heading";
import {
  GradientHorizontal,
  GradientVertical
} from "../animations/keyframes.js";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 280px;
`;

export const Image = styled(Img)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BodyGradient = styled.div`
  position: absolute;
  height: 100%;
  width: 80%;
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
    animation: ${GradientHorizontal} 5s ease infinite;
    @media ${(props) => props.theme.breakpoints.xs} {
      height: 100%;
      width: 6px;
      background-size: 100% 300%;
      animation: ${GradientVertical} 5s ease infinite;
    }
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px 0;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 100%;
    padding: 68px 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 68px 11.53rem;
  }
`;

export const Header = styled(Heading)`
  width: clamp(310px, 100%, 400px);
  @media (max-width: 540px) {
    margin-bottom: 24px;
  }
`;
