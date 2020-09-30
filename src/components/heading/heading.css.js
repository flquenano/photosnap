import styled from "styled-components";

export const HeadingXL = styled.h1`
  font-size: clamp(3.2rem, 6vw, 4rem);
  line-height: 40px;
  letter-spacing: 3.33px;
  text-transform: uppercase;
  margin-bottom: 1.067rem;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.dark};
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 1.4rem;
    line-height: 48px;
    letter-spacing: 4.17px;
  }
`;

export const HeadingMD = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;

export const HeadingSM = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1.67rem;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;

export const HeadingXS = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;
