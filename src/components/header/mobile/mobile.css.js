import styled from "styled-components";
import { animated } from "react-spring";
export const Wrapper = styled(animated.div)`
  position: fixed;
  display: none;
  justify-content: center;
  width: 100%;
  top: 7.2rem;
  padding: 3.2rem;
  background: ${(props) => props.theme.colors.secondary.white};
`;

export const List = styled.ul`
  width: clamp(310px, 100%, 450px);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Item = styled.li`
  width: 100%;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:nth-child(3) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-bottom: 2rem;
  }
  &:last-child {
    padding: 1.4rem;
    background: ${(props) => props.theme.colors.secondary.black};
    color: ${(props) => props.theme.colors.secondary.white};
  }
`;
