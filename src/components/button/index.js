import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Arrow } from "./button.css.js";

export const Button = ({ className, colorScheme, noArrow, children }) => (
  <Wrapper className={className} colorScheme={colorScheme}>
    <span>{children} </span>{" "}
    {noArrow ? null : <Arrow className="arrow-svg" colorScheme={colorScheme} />}
  </Wrapper>
);

Button.defaultProps = {
  colorScheme: "light",
  noArrow: false
};

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["light", "dark"]),
  noArrow: PropTypes.bool,
  children: PropTypes.node.isRequired
};
