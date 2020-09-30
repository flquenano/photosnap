import React from "react";
import PropTypes from "prop-types";
import Check from "./check.svg";
import { Wrapper, Heading, Body, Basic, Pro, Bns } from "./item.css.js";

export const Item = ({ feature: { title, isBasic, isPro, isBusiness } }) => {
  return (
    <Wrapper>
      <Heading size="xs">{title}</Heading>
      <Body>
        <Basic>{isBasic ? <Check /> : " "}</Basic>
        <Pro>{isPro ? <Check /> : " "}</Pro>
        <Bns>{isBusiness ? <Check /> : " "}</Bns>
      </Body>
    </Wrapper>
  );
};

Item.propTypes = {
  feature: PropTypes.exact({
    title: PropTypes.string.isRequired,
    isBasic: PropTypes.bool,
    isPro: PropTypes.bool,
    isBusiness: PropTypes.bool
  })
};
