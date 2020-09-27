import React from "react";
import PropTypes from "prop-types";
import { Item } from "./item";
import { Wrapper } from "./gallery.css.js";

export const Gallery = ({ images }) => {
  return (
    <Wrapper>
      {images.map((image, idx) => (
        <Item key={idx} image={image} />
      ))}
    </Wrapper>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};
