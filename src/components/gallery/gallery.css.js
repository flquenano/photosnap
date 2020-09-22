import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.xs} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
