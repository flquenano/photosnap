import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  height: auto;
  justify-items: center;
  align-items: baseline;
  margin: 64px 0;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 78%;
    grid-column-gap: 30px;
    margin: 120px auto;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
