import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./text.css.js";

export const Text = ({ children, color, className }) => (
  <Wrapper className={className} color={color}>
    {children}
  </Wrapper>
);

Text.propTypes = {
  color: PropTypes.oneOf(["dark", "light"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
