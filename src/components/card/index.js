import React from "react";
import {
  Wrapper,
  Content,
  PriceWrapper,
  Option,
  Text,
  SubText,
  Price,
  Button,
  PortraitPriceWrapper,
  LandscapePriceWrapper
} from "./card.css.js";

export const Card = ({ color, option, text, price, subtext }) => (
  <Wrapper color={color}>
    <Content>
      <Option color={color} size="md">
        {option}
      </Option>
      <Text color={color}>{text}</Text>
      <PortraitPriceWrapper>
        <Price size="xl" color={color}>
          {price}
        </Price>
        <SubText color={color}>{subtext}</SubText>
      </PortraitPriceWrapper>
      <Button color={color} noArrow={true}>
        Pick plan
      </Button>
    </Content>
    <LandscapePriceWrapper>
      <Price size="xl" color={color}>
        {price}
      </Price>
      <SubText color={color}>{subtext}</SubText>
    </LandscapePriceWrapper>
  </Wrapper>
);
