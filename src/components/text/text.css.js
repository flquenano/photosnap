import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  opacity: 0.6;
  color: ${(props) =>
    props.colorScheme === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;
