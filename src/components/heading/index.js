import React from "react";
import PropTypes from "prop-types";
import { HeadingXL, HeadingMD, HeadingSM, HeadingXS } from "./heading.css.js";

export const Heading = ({ className, color, size, children }) => {
  switch (size) {
    case "xl":
      return (
        <HeadingXL className={className} color={color}>
          {children}
        </HeadingXL>
      );
    case "md":
      return (
        <HeadingMD className={className} color={color}>
          {children}
        </HeadingMD>
      );

    case "sm":
      return (
        <HeadingSM className={className} color={color}>
          {children}
        </HeadingSM>
      );
    case "xs":
      return (
        <HeadingXS className={className} color={color}>
          {children}
        </HeadingXS>
      );
    default:
      break;
  }
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["xl", "md", "sm", "xs"]).isRequired
};
