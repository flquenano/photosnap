import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Content,
  Option,
  Text,
  SubText,
  Price,
  Button,
  PortraitPriceWrapper,
  LandscapePriceWrapper
} from "./card.css.js";

export const Card = ({ colorScheme, option, text, price, subtext }) => (
  <Wrapper colorScheme={colorScheme}>
    <Content>
      <Option colorScheme={colorScheme} size="md">
        {option}
      </Option>
      <Text colorScheme={colorScheme}>{text}</Text>
      <PortraitPriceWrapper>
        <Price size="xl" colorScheme={colorScheme}>
          {price}
        </Price>
        <SubText colorScheme={colorScheme}>{subtext}</SubText>
      </PortraitPriceWrapper>
      <Button colorScheme={colorScheme} noArrow={true}>
        Pick plan
      </Button>
    </Content>
    <LandscapePriceWrapper>
      <Price size="xl" colorScheme={colorScheme}>
        {price}
      </Price>
      <SubText colorScheme={colorScheme}>{subtext}</SubText>
    </LandscapePriceWrapper>
  </Wrapper>
);

Card.propTypes = {
  colorScheme: PropTypes.oneOf(["light", "dark"]).isRequired,
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired
};
