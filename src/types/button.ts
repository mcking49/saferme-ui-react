import React from 'react'

import { colors } from '../theme'

import { IconProps } from './icon'

type ButtonColorSchemes =
  | 'darkBlue'
  | 'blue'
  | 'blueTinted'
  | 'white'
  | 'grey'
  | 'green'
  | 'red'
  | 'orange'
  | 'darkOrange'

type ButtonVariants = 'primary' | 'outline' | 'plain' | 'default'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  colorScheme?: ButtonColorSchemes
  iconLeft?: React.ReactElement<IconProps>
  iconRight?: React.ReactElement<IconProps>
  variant?: ButtonVariants
}

export const COLOR_SCHEME_MAP: Readonly<Record<ButtonColorSchemes, string>> = {
  blue: colors.primary.blue.main,
  blueTinted: colors.primary.blueTinted.main,
  darkBlue: colors.primary.darkBlue.main,
  darkOrange: colors.secondary.darkOrange.main,
  green: colors.secondary.green.main,
  grey: colors.secondary.grey.main,
  orange: colors.secondary.orange.main,
  red: colors.secondary.red.main,
  white: colors.primary.white.main,
}
