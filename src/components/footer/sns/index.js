import React from "react";
import { Wrapper } from "./sns.css.js";
import FB from "./facebook.svg";
import YT from "./youtube.svg";
import TW from "./twitter.svg";
import PT from "./pinterest.svg";
import IG from "./instagram.svg";

export const SNS = ({ className }) => (
  <Wrapper className={className}>
    <FB />
    <YT />
    <TW />
    <PT />
    <IG />
  </Wrapper>
);
