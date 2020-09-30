import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./text.css.js";

export const Text = ({ children, colorScheme, className }) => (
  <Wrapper className={className} colorScheme={colorScheme}>
    {children}
  </Wrapper>
);

Text.defaultProps = {
  colorScheme: "light"
};

Text.propTypes = {
  colorScheme: PropTypes.oneOf(["dark", "light"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
