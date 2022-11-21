import React from 'react'

import { IconProps } from '../../../types/icon'

const IconCheckmark = ({
  color = 'currentColor',
  size = '1rem',
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.8839 0.449465C35.372 0.937621 35.372 1.72908 34.8839 2.21723L13.5506 23.5506C13.0624 24.0387 12.2709 24.0387 11.7828 23.5506L1.11612 12.8839C0.627967 12.3957 0.627967 11.6043 1.11612 11.1161V11.1161C1.60428 10.628 2.39573 10.628 2.88389 11.1161L12.6667 20.8989L33.1161 0.449465C33.6043 -0.03869 34.3957 -0.0386897 34.8839 0.449465V0.449465Z"
      fill={color}
    />
  </svg>
)

export default IconCheckmark
