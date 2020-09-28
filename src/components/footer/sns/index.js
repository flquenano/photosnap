import React from "react";
import { Wrapper, FB, YT, TW, PT, IG } from "./sns.css.js";

export const SNS = ({ className }) => (
  <Wrapper className={className}>
    <FB />
    <YT />
    <TW />
    <PT />
    <IG />
  </Wrapper>
);
