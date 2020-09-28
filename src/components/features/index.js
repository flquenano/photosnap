import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./features.css.js";
import { Feature } from "./feature";

export const Features = ({ features, page }) => {
  return (
    <Wrapper>
      {features.map((feature) => (
        <Feature
          key={feature.icon.id}
          icon={feature.icon.publicURL}
          title={feature.title}
          text={feature.text}
          page={page}
        />
      ))}
    </Wrapper>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        publicURL: PropTypes.string.isRequired
      }).isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};
