import React from 'react'

import { IconProps } from '../../../types/icon'

const IconArrowLeft = ({ color = 'currentColor', size = '1em' }: IconProps) => (
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
      d="M19.5506 0.782779C19.0624 0.294623 18.271 0.294622 17.7828 0.782777L0.449463 18.1161C-0.0386925 18.6043 -0.0386944 19.3957 0.449461 19.8839L17.7828 37.2172C18.271 37.7054 19.0624 37.7054 19.5506 37.2172C20.0387 36.729 20.0387 35.9376 19.5506 35.4494L3.10111 19L19.5506 2.55055C20.0387 2.06239 20.0387 1.27093 19.5506 0.782779Z"
      fill={color}
    />
  </svg>
)

export default IconArrowLeft
