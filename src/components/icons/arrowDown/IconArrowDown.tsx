import React from 'react'

import { IconProps } from '../../../types/icon'

const IconArrowDown = ({ color = 'currentColor', size = '1em' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.2172 0.449435C37.7053 0.93759 37.7053 1.72905 37.2172 2.2172L19.8839 19.5505C19.3957 20.0387 18.6042 20.0387 18.1161 19.5505L0.782764 2.2172C0.294609 1.72905 0.294609 0.937588 0.782764 0.449433C1.27092 -0.0387218 2.06237 -0.0387228 2.55053 0.449433L19 16.8989L35.4494 0.449435C35.9376 -0.0387202 36.729 -0.0387203 37.2172 0.449435Z"
      fill={color}
    />
  </svg>
)

export default IconArrowDown
