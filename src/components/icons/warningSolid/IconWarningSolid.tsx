import React from 'react'

import { IconProps } from '../../../types/icon'

const IconWarningSolid = ({
  color = 'currentColor',
  size = '1em',
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.6195 35C39.5818 35 40.1832 33.9583 39.7021 33.125L21.0825 0.875C20.6014 0.041667 19.3986 0.0416681 18.9175 0.875001L0.297925 33.125C-0.1832 33.9583 0.418205 35 1.38046 35H38.6195ZM18.75 14.25C18.75 13.5596 19.3096 13 20 13C20.6904 13 21.25 13.5596 21.25 14.25V23.75C21.25 24.4404 20.6904 25 20 25C19.3096 25 18.75 24.4404 18.75 23.75V14.25ZM21.25 28.25C21.25 28.9404 20.6904 29.5 20 29.5C19.3096 29.5 18.75 28.9404 18.75 28.25C18.75 27.5596 19.3096 27 20 27C20.6904 27 21.25 27.5596 21.25 28.25Z"
      fill={color}
    />
  </svg>
)

export default IconWarningSolid
