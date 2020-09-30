import React from "react";
import PropTypes from "prop-types";
import { HeadingXL, HeadingMD, HeadingSM, HeadingXS } from "./heading.css.js";

export const Heading = ({ className, colorScheme, size, children }) => {
  switch (size) {
    case "xl":
      return (
        <HeadingXL className={className} colorScheme={colorScheme}>
          {children}
        </HeadingXL>
      );
    case "md":
      return (
        <HeadingMD className={className} colorScheme={colorScheme}>
          {children}
        </HeadingMD>
      );

    case "sm":
      return (
        <HeadingSM className={className} colorScheme={colorScheme}>
          {children}
        </HeadingSM>
      );
    case "xs":
      return (
        <HeadingXS className={className} colorScheme={colorScheme}>
          {children}
        </HeadingXS>
      );
    default:
      return (
        <HeadingSM className={className} colorScheme={colorScheme}>
          {children}
        </HeadingSM>
      );
  }
};

Heading.defaultProps = {
  colorScheme: "light",
  size: "md"
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  colorScheme: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["xl", "md", "sm", "xs"]).isRequired
};
