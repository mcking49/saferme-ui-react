import React from 'react'

import { IconProps } from '../../../types/icon'

const IconCheckmarkCircle = ({
  color = 'currentColor',
  size = '1rem',
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.3839 13.8839C28.872 13.3957 28.872 12.6043 28.3839 12.1161C27.8957 11.628 27.1043 11.628 26.6161 12.1161L15.5 23.2322L11.3839 19.1161C10.8957 18.628 10.1043 18.628 9.61612 19.1161C9.12796 19.6043 9.12796 20.3957 9.61612 20.8839L14.6161 25.8839C15.1043 26.372 15.8957 26.372 16.3839 25.8839L28.3839 13.8839Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.5 19C37.5 29.2173 29.2173 37.5 19 37.5C8.78273 37.5 0.5 29.2173 0.5 19C0.5 8.78273 8.78273 0.5 19 0.5C29.2173 0.5 37.5 8.78273 37.5 19ZM35 19C35 27.8366 27.8366 35 19 35C10.1634 35 3 27.8366 3 19C3 10.1634 10.1634 3 19 3C27.8366 3 35 10.1634 35 19Z"
      fill={color}
    />
  </svg>
)

export default IconCheckmarkCircle
