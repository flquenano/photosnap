import React from "react";
import { Text } from "./text.css.js";

const TextComponent = ({ children, color, className }) => (
  <Text className={className} color={color}>
    {children}
  </Text>
);

export default TextComponent;
