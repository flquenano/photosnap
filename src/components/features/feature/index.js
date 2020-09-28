import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../text";

import { Wrapper, Icon, Heading } from "./feature.css.js";

export const Feature = ({ icon, title, text, page }) => {
  console.log(page);
  return (
    <Wrapper page={page}>
      <Icon src={icon} />
      <Heading size="sm" color="light">
        {title}
      </Heading>
      <Text colr="light">{text}</Text>
    </Wrapper>
  );
};

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
