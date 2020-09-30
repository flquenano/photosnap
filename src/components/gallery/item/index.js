import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Image,
  Content,
  HeadingXS,
  HeadingSM,
  Button,
  ButtonHeading,
  Overlay,
  Arrow
} from "./item.css.js";

export const Item = ({ image, noDate }) => {
  const sources = [
    {
      ...image.preview.desktop.childImageSharp.fluid,
      media: "(min-width: 540px)"
    },
    image.preview.mobile.childImageSharp.fluid
  ];

  return (
    <Wrapper>
      <Image fluid={sources} />
      <Overlay />
      <Content>
        {noDate ? null : (
          <HeadingXS size="xs" colorScheme="dark">
            {image.date}
          </HeadingXS>
        )}

        <HeadingSM size="sm" colorScheme="dark">
          {image.title}
        </HeadingSM>

        <HeadingXS size="xs" colorScheme="dark">
          by {image.author}
        </HeadingXS>

        <Button>
          <ButtonHeading>Read More</ButtonHeading>
          <Arrow />
        </Button>
      </Content>
    </Wrapper>
  );
};

Item.propTypes = {
  image: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    preview: PropTypes.objectOf(PropTypes.object).isRequired
  })
};
