import styled from "styled-components";

export const HeadingXL = styled.h1`
  font-size: clamp(2.13rem, 6vw, 2.67rem);
  line-height: 40px;
  letter-spacing: 3.33px;
  text-transform: uppercase;
  margin-bottom: 1.067rem;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.dark};
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 1.4rem;
    line-height: 48px;
    letter-spacing: 4.17px;
  }
`;

export const HeadingMD = styled.h1`
  font-size: 1.6rem;
  line-height: 25px;
`;

export const HeadingSM = styled.h1`
  font-size: 1.2rem;
  line-height: 1.67rem;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;

export const HeadingXS = styled.h1`
  font-size: 0.87rem;
  letter-spacing: 2px;
  font-weight: 400;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;
