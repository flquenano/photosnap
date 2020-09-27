import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(375px, 100%, 1920px);
`;

export const Main = styled.main`
  width: 100%;
`;
