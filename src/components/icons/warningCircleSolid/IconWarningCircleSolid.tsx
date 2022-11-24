import React from 'react'

import { IconProps } from '../../../types/icon'

const IconWarningCircleSolid = ({
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
      d="M19 37.5C29.2173 37.5 37.5 29.2173 37.5 19C37.5 8.78273 29.2173 0.5 19 0.5C8.78273 0.5 0.5 8.78273 0.5 19C0.5 29.2173 8.78273 37.5 19 37.5ZM17.75 10.25C17.75 9.55964 18.3096 9 19 9C19.6904 9 20.25 9.55964 20.25 10.25V22.7499C20.25 23.4403 19.6904 23.9999 19 23.9999C18.3096 23.9999 17.75 23.4403 17.75 22.7499V10.25ZM20.25 27.2499C20.25 27.9402 19.6904 28.4999 19 28.4999C18.3096 28.4999 17.75 27.9402 17.75 27.2499C17.75 26.5595 18.3096 25.9999 19 25.9999C19.6904 25.9999 20.25 26.5595 20.25 27.2499Z"
      fill={color}
    />
  </svg>
)

export default IconWarningCircleSolid
