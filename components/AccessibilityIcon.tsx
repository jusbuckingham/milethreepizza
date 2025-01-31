"use client";

import React from "react";
import { FaUniversalAccess } from "react-icons/fa";

interface AccessibilityIconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const AccessibilityIcon: React.FC<AccessibilityIconProps> = ({
  size = 32,       // Default size: 32px
  color = "currentColor",
  className = "",
}) => {
  return (
    <FaUniversalAccess
      size={size}
      color={color}
      // Provide a smooth transform effect and a standard hover scale
      className={`transition-transform hover:scale-110 focus:scale-110 ${className}`}
      role="img"
      aria-label="Accessibility Options"
      tabIndex={0}
    />
  );
};

export default AccessibilityIcon;