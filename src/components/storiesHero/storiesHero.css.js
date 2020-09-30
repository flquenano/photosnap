import styled from "styled-components";
import Img from "gatsby-image";
import { Heading } from "../heading";
import { Text } from "../text";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 650px;
    display: flex;
    align-items: center;
  }
`;

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.secondary.black};
  width: 100%;
  padding: 48px 7%;
  top: 0;
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 38.7rem;
    padding: 0;
    margin: 14rem 0 14rem 5%;
    position: absolute;
    background: none;
  }
`;

export const OverheadHeading = styled(Heading)`
  margin-bottom: 1.6rem; ;
`;

export const MainHeading = styled(Heading)`
  width: 80%;
  margin-bottom: 1.6rem;
`;

export const AuthorHeading = styled(Heading)`
  margin-bottom: 2.4rem;
`;

export const Description = styled(Text)`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.colors.secondary.white};
  opacity: 0.6;
  margin-bottom: 2.4rem;
`;
