import React from 'react'

import { IconProps } from '../../../types/icon'

const IconArrowRight = ({
  color = 'currentColor',
  size = '1rem',
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.449435 0.782779C0.93759 0.294623 1.72905 0.294622 2.2172 0.782777L19.5505 18.1161C20.0387 18.6043 20.0387 19.3957 19.5505 19.8839L2.2172 37.2172C1.72905 37.7054 0.93759 37.7054 0.449435 37.2172C-0.0387202 36.729 -0.0387212 35.9376 0.449434 35.4494L16.8989 19L0.449435 2.55055C-0.0387201 2.06239 -0.0387202 1.27093 0.449435 0.782779Z"
      fill={color}
    />
  </svg>
)

export default IconArrowRight
