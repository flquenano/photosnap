import React from "react";
import PropTypes from "prop-types";

import {
  Body,
  BodyGradient,
  Container,
  Content,
  Image,
  Text
} from "./hero.css.js";

import Button from "../button";
import Heading from "../heading/index.js";

const HeroComponent = ({
  height,
  image,
  content,
  reverse = false,
  isBtn = false,
  noGradient = false,
  color = "light"
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
    <Container height={height} reverse={reverse}>
      <Image fluid={sources} />
      <Content color={color}>
        <BodyGradient noGradient={noGradient}>
          <Body>
            <Heading color={color} size="xl">
              {content.title}
            </Heading>
            <Text color={color} isBtn={isBtn}>
              {content.text}
            </Text>
            {isBtn ? <Button color={color} /> : undefined}
          </Body>
        </BodyGradient>
      </Content>
    </Container>
  );
};

HeroComponent.propTypes = {
  image: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(["light", "dark"])
};

export default HeroComponent;
