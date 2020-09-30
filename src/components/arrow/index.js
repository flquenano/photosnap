import React from "react";
import PropTypes from "prop-types";

export const Arrow = ({ className, colorScheme }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="43"
    height="14"
    className={className}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={`${colorScheme === "dark" ? "#FFF" : "#000"}`}
    >
      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
    </g>
  </svg>
);

Arrow.defaultProps = {
  colorScheme: "light"
};

Arrow.propTypes = {
  className: PropTypes.string,
  colorScheme: PropTypes.oneOf(["light", "dark"])
};
