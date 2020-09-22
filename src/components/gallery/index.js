import React from "react";
import { Wrapper } from "./gallery.css.js";
import Item from "./item";
const GalleryComponent = ({ images }) => {
  console.log(images);
  return (
    <Wrapper>
      {images.map((image, idx) => (
        <Item key={idx} image={image} />
      ))}
    </Wrapper>
  );
};

export default GalleryComponent;
