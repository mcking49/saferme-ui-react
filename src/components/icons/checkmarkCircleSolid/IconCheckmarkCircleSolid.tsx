import React from 'react'

import { IconProps } from '../../../types/icon'

const IconCheckmarkCircleSolid = ({
  color = 'currentColor',
  size = '1em',
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 37.5C29.2173 37.5 37.5 29.2173 37.5 19C37.5 8.78273 29.2173 0.5 19 0.5C8.78273 0.5 0.5 8.78273 0.5 19C0.5 29.2173 8.78273 37.5 19 37.5ZM28.3839 13.8839C28.872 13.3957 28.872 12.6043 28.3839 12.1161C27.8957 11.628 27.1043 11.628 26.6161 12.1161L15.5 23.2322L11.3839 19.1161C10.8957 18.628 10.1043 18.628 9.61612 19.1161C9.12797 19.6043 9.12797 20.3957 9.61612 20.8839L14.6161 25.8839C15.1043 26.372 15.8957 26.372 16.3839 25.8839L28.3839 13.8839Z"
      fill={color}
    />
  </svg>
)

export default IconCheckmarkCircleSolid
