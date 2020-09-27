import styled from "styled-components";
import { Heading as DefaultHeading } from "../../heading";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(31rem, 90%, 45.7rem);
  text-align: center;
  margin-bottom: 5.6rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 35rem;
    margin-bottom: 10.4rem;
  }
`;

export const Icon = styled.img`
  margin-bottom: 4.8rem;
`;
export const Heading = styled(DefaultHeading)`
  margin-bottom: 1.6rem;
`;
