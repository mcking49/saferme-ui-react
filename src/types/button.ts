import React from 'react'

import { IconProps } from './icon'

type ButtonVariants = 'primary' | 'outline' | 'plain' | 'default'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  iconLeft?: React.ReactElement<IconProps>
  iconRight?: React.ReactElement<IconProps>
  variant?: ButtonVariants
}
