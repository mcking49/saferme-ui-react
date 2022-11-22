import React from 'react'

import { IconProps } from '../../../types/icon'

const IconPlus = ({ color = 'currentColor', size = '1rem' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.25 6.25C25.25 5.55964 24.6904 5 24 5C23.3096 5 22.75 5.55964 22.75 6.25V22.75H6.25C5.55964 22.75 5 23.3096 5 24C5 24.6904 5.55964 25.25 6.25 25.25H22.75V41.75C22.75 42.4404 23.3096 43 24 43C24.6904 43 25.25 42.4404 25.25 41.75V25.25H41.75C42.4404 25.25 43 24.6904 43 24C43 23.3096 42.4404 22.75 41.75 22.75H25.25V6.25Z"
      fill={color}
    />
  </svg>
)

export default IconPlus
