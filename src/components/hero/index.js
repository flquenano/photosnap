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
  reverse = false,
  isBtn = false,
  noGradient = false,
  color = "light",
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
      <Content color={color}>
        <BodyGradient noGradient={noGradient}>
          <Body>
            <Heading color={color} size="xl">
              {content.title}
            </Heading>
            <Text color={color} isBtn={isBtn}>
              {content.text}
            </Text>
            {isBtn ? <Button color={color}>{Btn}</Button> : undefined}
          </Body>
        </BodyGradient>
      </Content>
    </Wrapper>
  );
};

Hero.propTypes = {
  image: PropTypes.object.isRequired,
  height: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  isBtn: PropTypes.bool,
  Btn: PropTypes.string,
  noGradient: PropTypes.bool,
  color: PropTypes.oneOf(["light", "dark"]),
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  theme: PropTypes.oneOf(["light", "dark"])
};
