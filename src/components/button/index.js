import React from "react";

import { Button, Arrow } from "./button.css.js";

const ButtonComponent = ({ className, color }) => (
  <Button className={className} color={color}>
    Get an invite <Arrow className="arrow-svg" color={color} />
  </Button>
);

export default ButtonComponent;
