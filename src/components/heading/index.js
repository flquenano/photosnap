import React from "react";
import { HeadingXL, HeadingMD, HeadingSM, HeadingXS } from "./heading.css.js";

const HeadingComponent = ({ className, color, size, children }) => {
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

export default HeadingComponent;
