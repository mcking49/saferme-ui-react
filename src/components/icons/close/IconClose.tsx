import React from 'react'

import { IconProps } from '../../../types/icon'

const IconClose = ({ color = 'currentColor', size = '1em' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 19.7678L33.2322 35C33.7204 35.4882 34.5118 35.4882 35 35C35.4881 34.5118 35.4881 33.7204 35 33.2322L19.7677 18L35 2.76777C35.4881 2.27961 35.4881 1.48816 35 1C34.5118 0.511847 33.7204 0.511847 33.2322 1L18 16.2322L2.76774 1C2.27958 0.511847 1.48813 0.511848 0.999972 1C0.511817 1.48816 0.511817 2.27961 0.999972 2.76777L16.2322 18L0.999972 33.2322C0.511817 33.7204 0.511817 34.5118 0.999972 35C1.48813 35.4882 2.27958 35.4882 2.76774 35L18 19.7678Z"
      fill={color}
    />
  </svg>
)

export default IconClose
