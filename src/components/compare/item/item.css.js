import styled from "styled-components";
import { Heading as DefaultHeading } from "../../heading";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 73.1rem;
  padding: 2.3rem 0 2.4rem;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  @media ${(props) => props.theme.breakpoints.xs} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2.35rem 0;
  }
`;

export const Heading = styled(DefaultHeading)`
  font-weight: 700;
  margin-bottom: 1.65rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 0;
  }
`;

export const Body = styled.div`
  display: flex;
`;

export const Basic = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 7rem;
  &::before {
    content: "Basic";
    margin-bottom: 0.8rem;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1.67px;
  }
  @media (min-width: 768px) {
    &::before {
      display: none;
    }
    margin-right: 12.4rem;
  }
`;

export const Pro = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 8.2rem;
  &::before {
    content: "Pro";
    margin-bottom: 0.8rem;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1.67px;
  }
  @media (min-width: 768px) {
    &::before {
      display: none;
    }
    margin-right: 12.4rem;
  }
`;

export const Bns = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &::before {
    content: "Business";
    margin-bottom: 0.8rem;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1.67px;
  }
  @media (min-width: 768px) {
    &::before {
      display: none;
    }
    margin-right: 6.2rem;
  }
`;
