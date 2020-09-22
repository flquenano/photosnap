import React from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import {
  Wrapper,
  Image,
  Content,
  HeadingXS,
  HeadingSM,
  Button,
  ButtonHeading,
  Arrow
} from "./item.css.js";

const Item = ({ image }) => {
  const [ref, inView] = useInView({
    threshold: 0.2
  });

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
      <Content>
        <HeadingXS size="xs" color="dark">
          {image.date}
        </HeadingXS>

        <HeadingSM size="sm" color="dark">
          {image.title}
        </HeadingSM>

        <HeadingXS size="xs" color="dark">
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
  image: PropTypes.object.isRequired
};

export default Item;
