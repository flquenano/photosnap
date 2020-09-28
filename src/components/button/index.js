import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Arrow } from "./button.css.js";

export const Button = ({
  className,
  color = "light",
  noArrow = false,
  children
}) => (
  <Wrapper className={className} color={color}>
    <span>{children} </span>{" "}
    {noArrow ? null : <Arrow className="arrow-svg" color={color} />}
  </Wrapper>
);

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["light", "dark"]),
  noArrow: PropTypes.bool,
  children: PropTypes.node.isRequired
};
