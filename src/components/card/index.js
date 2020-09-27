import React from "react";
import {
  Wrapper,
  PriceWrapper,
  Option,
  Text,
  SubText,
  Price,
  Button
} from "./card.css.js";

export const Card = ({ color, option, text, price, subtext }) => (
  <Wrapper color={color}>
    <Option color={color} size="md">
      {option}
    </Option>
    <Text color={color}>{text}</Text>
    <PriceWrapper>
      <Price size="xl" color={color}>
        {price}
      </Price>
      <SubText color={color}>{subtext}</SubText>
    </PriceWrapper>
    <Button color={color} noArrow={true}>
      Pick plan
    </Button>
  </Wrapper>
);
