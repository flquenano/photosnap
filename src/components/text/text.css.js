import styled from "styled-components";

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.667rem;
  opacity: 0.6;
  color: ${(props) =>
    props.color === "dark"
      ? props.theme.colors.secondary.white
      : props.theme.colors.secondary.black};
`;
