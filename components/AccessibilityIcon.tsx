// AccessibilityIcon.tsx

import React from 'react';
import { FaUniversalAccess } from 'react-icons/fa';

interface AccessibilityIconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const AccessibilityIcon: React.FC<AccessibilityIconProps> = ({
  size = 32, // Default size: 32px
  color = 'currentColor', // Inherit color from parent
  className = '',
}) => (
  <FaUniversalAccess
    size={size}
    color={color}
    className={`transition-transform transform hover:scale-110 focus:scale-110 ${className}`}
    aria-hidden="true"
    focusable="false"
    role="img"
    aria-label="Accessibility Options"
    tabIndex={0}
  />
);

export default AccessibilityIcon;
