import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  ToggleWrapper,
  Slider,
  Checkbox,
  Monthly,
  Yearly
} from "./toggle.css.js";

export const Toggle = ({ setToggle, toggle }) => {
  return (
    <Wrapper>
      <Monthly size="sm" toggle={toggle}>
        Monthly
      </Monthly>
      <ToggleWrapper>
        <Checkbox onChange={setToggle} />
        <Slider toggle={toggle} />
      </ToggleWrapper>
      <Yearly size="sm" toggle={toggle}>
        Yearly
      </Yearly>
    </Wrapper>
  );
};

Toggle.propTypes = {
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
};
