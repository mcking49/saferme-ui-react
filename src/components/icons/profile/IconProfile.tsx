import React from 'react'

import { IconProps } from '../../../types/icon'

const IconProfile = ({ color = 'currentColor', size = '1em' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 10C28 15.5228 23.5228 20 18 20C12.4772 20 8 15.5228 8 10C8 4.47715 12.4772 0 18 0C23.5228 0 28 4.47715 28 10ZM25.5 10C25.5 14.1421 22.1421 17.5 18 17.5C13.8579 17.5 10.5 14.1421 10.5 10C10.5 5.85786 13.8579 2.5 18 2.5C22.1421 2.5 25.5 5.85786 25.5 10Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.5 32.5V38.75C35.5 39.4404 34.9404 40 34.25 40H1.75C1.05964 40 0.5 39.4404 0.5 38.75V32.5C0.5 27.5 12 23.5 18 23.5C24 23.5 35.5 27.5 35.5 32.5ZM3 37.5V32.5C3 32.2514 3.15074 31.6821 4.08327 30.8242C4.98552 29.9941 6.34781 29.1571 8.02264 28.4063C11.3939 26.895 15.42 26 18 26C20.58 26 24.6061 26.895 27.9774 28.4063C29.6522 29.1571 31.0145 29.9941 31.9167 30.8242C32.8493 31.6821 33 32.2514 33 32.5V37.5H3Z"
      fill={color}
    />
  </svg>
)

export default IconProfile
