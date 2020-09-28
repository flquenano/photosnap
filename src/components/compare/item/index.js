import React from "react";
import styled from "styled-components";
import Check from "./check.svg";

import { Heading as DefaultHeading } from "../../heading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 73.1rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  margin-bottom: 2.4rem;
  @media ${(props) => props.theme.breakpoints.xs} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Heading = styled(DefaultHeading)`
  font-weight: 700;
  margin-bottom: 1.65rem;
`;

const Body = styled.div`
  display: flex;
`;

const Basic = styled.span`
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
const Pro = styled.span`
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
const Bns = styled.span`
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

export const Item = ({ feature: { title, isBasic, isPro, isBusiness } }) => {
  return (
    <Wrapper>
      <Heading size="xs">{title}</Heading>
      <Body>
        <Basic>{isBasic ? <Check /> : " "}</Basic>
        <Pro>{isPro ? <Check /> : " "}</Pro>
        <Bns>{isBusiness ? <Check /> : " "}</Bns>
      </Body>
    </Wrapper>
  );
};
