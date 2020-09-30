import React from "react";
import PropTypes from "prop-types";

import {
  Body,
  BodyGradient,
  Wrapper,
  Content,
  Image,
  Text
} from "./hero.css.js";

import { Button } from "../button";
import { Heading } from "../heading/index.js";

export const Hero = ({
  height,
  image,
  content,
  reverse,
  isBtn,
  noGradient,
  colorScheme,
  Btn
}) => {
  const sources = [
    {
      ...image.desktop.childImageSharp.fluid,
      media: "(min-width: 1024px)"
    },
    {
      ...image.tablet.childImageSharp.fluid,
      media: "(min-width: 540px)"
    },
    image.mobile.childImageSharp.fluid
  ];

  return (
    <Wrapper height={height} reverse={reverse}>
      <Image fluid={sources} />
      <Content colorScheme={colorScheme}>
        <BodyGradient noGradient={noGradient}>
          <Body>
            <Heading colorScheme={colorScheme} size="xl">
              {content.title}
            </Heading>
            <Text colorScheme={colorScheme} isBtn={isBtn}>
              {content.text}
            </Text>
            {isBtn ? (
              <Button colorScheme={colorScheme}>{Btn}</Button>
            ) : undefined}
          </Body>
        </BodyGradient>
      </Content>
    </Wrapper>
  );
};

Hero.defaultProps = {
  colorScheme: "light",
  reverse: false,
  isBtn: false,
  noGradient: false
};

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  height: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  isBtn: PropTypes.bool,
  Btn: PropTypes.string,
  noGradient: PropTypes.bool,
  colorScheme: PropTypes.oneOf(["light", "dark"]),
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  theme: PropTypes.oneOf(["light", "dark"])
};
